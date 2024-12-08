import { useActionState, useRef } from "react"
interface Pokemon {
  id: number
  name: string
}

interface PokemonResponse {
  error: string | null
  pokemon: Pokemon | null
}

const PokermonFetch = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchPokemon = async(): Promise<PokemonResponse | null >  => {
    if (!inputRef.current) return null

    const pokemonId = inputRef.current.value
    console.log(pokemonId)

    const url = `https://pokeapi.co/api/v2/berry/${pokemonId}/`
    try {
      const response = await fetch(url)
      const data = await response.json()
      const miPokemon = { id: data.id, name: data.name }

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
      </form>

      { pokemonResponse?.error && <span style={ { color: "red" } }>{ pokemonResponse.error }</span> }
      { pokemonResponse?.pokemon && <span>{ pokemonResponse.pokemon.name }</span> }
    </div>
  )
}

export default PokermonFetch
