import useGetPokemonsGenerations from "@/pokemons/hooks/useGetPokemonsGenerations";
import { Link } from "react-router";
import { APP_ROUTES } from "@/shared/constants/routes";
import PokemonOverview from "@/pokemons/ui/components/PokemonOverview/PokemonOverview";
import "./PokemonGenerationList.scss";

const PokemonGenerationList = () => {
  const { generations, isLoading, generationsError } =
    useGetPokemonsGenerations();

  return (
    <>
      {generationsError && <p>{generationsError}</p>}

      {isLoading && (
        <p>Nous chargeons les pokemon du pokédex, un peu de patience...</p>
      )}

      {generations?.map((generation, index) => (
        <section className="pokemons__generation" key={index}>
          <h3>
            Gen <span>{index + 1}</span>
          </h3>
          <div className="pokemons__pokemons">
            {generation.map((pokemon) => (
              <Link
                to={`${APP_ROUTES.POKEMONS}/${pokemon.id}`}
                key={pokemon.id}
              >
                <PokemonOverview pokemon={pokemon} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default PokemonGenerationList;
