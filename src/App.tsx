import "./App.css"
// import PokemonAxios from "./components/PokemonAxios"
import PokemonFetchHook from "./components/PokemonFetchHook"
// import PokemonFetchHook from "./components/PokemonFetchHook"

const App = () => {
  return (
    <div>
      <PokemonFetchHook pokemonId="1" />
      {/* <PokemonAxios /> */}
    </div>
  )
}

export default App
