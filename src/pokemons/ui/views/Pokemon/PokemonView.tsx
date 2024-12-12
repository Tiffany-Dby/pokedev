import useGetPokemon from "@/pokemons/hooks/useGetPokemon";
import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import { useParams } from "react-router";
import "./PokemonView.scss";
import PokemonDetails from "@/pokemons/ui/components/PokemonDetails/PokemonDetails";

const PokemonView = () => {
  const { id } = useParams();

  const { pokemon, isLoading, pokemonError } = useGetPokemon(id);

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

export default PokemonView;
