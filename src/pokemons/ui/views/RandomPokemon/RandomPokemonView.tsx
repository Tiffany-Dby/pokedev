import useGetRandomTeam from "@/pokemons/hooks/useGetRandomTeam";
import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import PokemonCard from "@/pokemons/ui/components/PokemonCard/PokemonCard";

const RandomPokemonView = () => {
  const { randomTeam, isLoading, teamError } = useGetRandomTeam();

  return (
    <BaseLayout>
      <section className="pokeroll">
        <div className="pokeroll__container">
          <h1>Un Pokémon aléatoire</h1>
          {teamError && <p>{teamError}</p>}

          {isLoading && (
            <p>Nous chargeons le pokemon du pokédex, un peu de patience...</p>
          )}

          {randomTeam?.length && <PokemonCard pokemon={randomTeam[0]} />}
        </div>
      </section>
    </BaseLayout>
  );
};

export default RandomPokemonView;
