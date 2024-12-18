import useGetPokemonsTypes from "@/pokemons/hooks/useGetPokemonsTypes";
import { Link } from "react-router";
import "./PokemonTypeList.scss";
import { APP_ROUTES } from "@/shared/constants/routes";
import PokemonOverview from "@/pokemons/ui/components/PokemonOverview/PokemonOverview";
import useGetTypes from "@/pokemons/hooks/useGetTypes";

const PokemonTypeList = () => {
  const { pokemonsTypes, isPokemonsTypesLoading, pokemonTypesError } =
    useGetPokemonsTypes();
  const { types, isLoading: isTypesLoading, typesError } = useGetTypes();

  return (
    <>
      {pokemonTypesError && <p>{pokemonTypesError}</p>}
      {typesError && <p>{typesError}</p>}

      {(isPokemonsTypesLoading || isTypesLoading) && (
        <p>
          Les Pokémons font aussi vite que possible pour se classer, un peu de
          patience...
        </p>
      )}

      {!!types?.length && !!pokemonsTypes?.length && (
        <>
          {pokemonsTypes?.map((pokemonType, index) => (
            <section
              className="pokemons__type"
              id={pokemonType.type}
              key={index}
            >
              <h3>
                {types
                  .filter((type) => type.name === pokemonType.type)
                  .map((type) => (
                    <div className="pokemons__type-img" key={type.id}>
                      <img
                        src={type.image}
                        alt={`Type ${type.name}`}
                        className="img"
                      />
                    </div>
                  ))}
                {pokemonType.type}
              </h3>
              <div className="pokemons__pokemons">
                {pokemonType.pokemons.map((pokemon) => (
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
      )}
    </>
  );
};

export default PokemonTypeList;
