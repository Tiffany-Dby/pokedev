import useGetPokemonsTypes from "@/pokemons/hooks/useGetPokemonsTypes";
import { Link } from "react-router";
import "./PokemonTypeList.scss";
import { APP_ROUTES } from "@/shared/constants/routes";
import PokemonOverview from "@/pokemons/ui/components/PokemonOverview/PokemonOverview";

const PokemonTypeList = () => {
  const { pokemonsTypes, isPokemonsTypesLoading, pokemonTypesError } =
    useGetPokemonsTypes();

  return (
    <>
      {pokemonTypesError && <p>{pokemonTypesError}</p>}

      {isPokemonsTypesLoading && (
        <p>
          Les Pokémons font aussi vite que possible pour se classer, un peu de
          patience...
        </p>
      )}

      {pokemonsTypes?.map((types, index) => (
        <section className="pokemons__type" id={types.type} key={index}>
          <h3>Type {types.type}</h3>
          <div className="pokemons__pokemons">
            {types.pokemons.map((pokemon) => (
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

export default PokemonTypeList;
