import { BrowserRouter, Route, Routes } from "react-router";
import { APP_ROUTES } from "@/shared/constants/routes";
import Home from "@/pokemons/ui/views/Home/HomeView";
import PokemonsGenerationsView from "@/pokemons/ui/views/PokemonsGenerations/PokemonsGenerationsView";
import PokemonsTypesView from "@/pokemons/ui/views/PokemonsTypes/PokemonsTypesView";
import TypesView from "@/pokemons/ui/views/Types/TypesView";
import RandomPokemonView from "@/pokemons/ui/views/RandomPokemon/RandomPokemonView";
import PokemonView from "@/pokemons/ui/views/Pokemon/PokemonView";
import "./App.scss";
import SearchResultView from "@/pokemons/ui/views/SearchResult/SearchResultView";
import GameView from "@/pokemons/ui/views/Game/GameView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route
          path={APP_ROUTES.POKEMONS_GENERATIONS}
          element={<PokemonsGenerationsView />}
        />
        <Route
          path={APP_ROUTES.POKEMONS_TYPES}
          element={<PokemonsTypesView />}
        />
        <Route
          path={APP_ROUTES.RANDOM_POKEMON}
          element={<RandomPokemonView />}
        />
        <Route path={APP_ROUTES.POKEMON} element={<PokemonView />} />
        <Route path={APP_ROUTES.PLAY} element={<GameView />} />
        <Route path={APP_ROUTES.TYPES} element={<TypesView />} />
        <Route path={APP_ROUTES.SEARCH} element={<SearchResultView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
