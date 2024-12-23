import useGetPokemon from "@/pokemons/hooks/useGetPokemon";
import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import { useSearchParams } from "react-router";
import PokemonDetails from "@/pokemons/ui/components/PokemonDetails/PokemonDetails";
import { capitalize } from "@/shared/utils/string";

const SearchResultView = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") ?? "";

  const { pokemon, isLoading, pokemonError } = useGetPokemon(capitalize(query));

  return (
    <BaseLayout>
      <section className="pokemon-details">
        <div className="pokemon-details__container">
          {pokemonError && <p>{pokemonError}</p>}
          {isLoading && <p>Chargement en cours...</p>}
          {!!pokemon && <PokemonDetails pokemon={pokemon} />}
        </div>
      </section>
    </BaseLayout>
  );
};

export default SearchResultView;
