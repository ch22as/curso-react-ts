import { useActionState, useRef, useState, useTransition } from "react"
import axios from "axios"
interface Pokemon {
  id: number
  name: string
}

interface PokemonResponse {
  error: string | null
  pokemon: Pokemon | null
}

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  method: "GET",
  headers: {
    authReact: 'falso',
    "Content-Type": "application/json"
  }
})

const PokemonAxiosInstance = () => {
  const [isPending, useIsPending] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchPokemon = async(): Promise<PokemonResponse | null >  => {
    if (!inputRef.current) return null

    const pokemonId = inputRef.current.value
    console.log(pokemonId)

    const url = `https://pokeapi.co/api/v2/berry/${pokemonId}/`
    useIsPending(true)

    try {
      const res = await axios.get(url)
      const miPokemon = { id: res.data.id, name: res.data.name }

      await new Promise(resolve => setTimeout(resolve, 4000))

      useIsPending(false)

      return { error: null, pokemon: miPokemon }
    } catch (error: any) {

      return { error: error?.message, pokemon: null }
    }
  }

  const [pokemonResponse, formAction] = useActionState<PokemonResponse | null>(fetchPokemon, null)

  return (
    <div>
      <h3>Buscador de pokemon</h3>
      <form action={ formAction } style={ { display: "flex", flexDirection: "column", gap: "10px" } }>
        <span>Introduce un id de pokemon</span>
        <input ref={ inputRef } type="number" name="pokemonId" />
        <button type="submit" >Buscar</button>
        { isPending && <span>Cargando...</span> }
      </form>

      { pokemonResponse?.error && <span style={ { color: "red" } }>{ pokemonResponse.error }</span> }
      { pokemonResponse?.pokemon && <span>{ pokemonResponse.pokemon.name }</span> }
    </div>
  )
}

export default PokemonAxiosInstance
