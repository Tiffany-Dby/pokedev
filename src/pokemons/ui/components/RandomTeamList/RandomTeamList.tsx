import useGetRandomTeam from "@/pokemons/hooks/useGetRandomTeam";
import PokemonCard from "@/pokemons/ui/components/PokemonCard/PokemonCard";

const PokemonList = () => {
  const { randomTeam, isLoading, teamError } = useGetRandomTeam();

  return (
    <>
      {teamError && <p>{teamError}</p>}

      {isLoading && <p>Nous capturons votre équipe, un peu de patience...</p>}

      {randomTeam?.map((pokemon) => (
        <div className="random-team__pokemon" key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </>
  );
};

export default PokemonList;
