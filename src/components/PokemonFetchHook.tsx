import { useFetch } from "../hooks/UseFetch"

const PokemonFetchHook = ({ pokemonId }: { pokemonId: string }) => {
  // const inputRef = useRef<HTMLInputElement>(null)
  const url = `https://pokeapi.co/api/v2/berry/${pokemonId}/`

  const { data, loading, error } = useFetch(url)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h3>Pokemon: { pokemonId }</h3>
      { loading && <span>Cargando...</span> }
      { error && <span style={ { color: "red" } }>{ error }</span> }
      { (data as boolean) && <span>Pokemon encontrado</span> }
    </div>
  )
}

export default PokemonFetchHook
