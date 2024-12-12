import useGetPokemon from "@/pokemons/hooks/useGetPokemon";
import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import { useSearchParams } from "react-router";
import PokemonDetails from "@/pokemons/ui/components/PokemonDetails/PokemonDetails";
import { useEffect } from "react";

const SearchResultView = () => {
  console.log("hello");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    console.log("query", query);
  }, []);

  const { pokemon, isLoading, pokemonError } = useGetPokemon(query);

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
