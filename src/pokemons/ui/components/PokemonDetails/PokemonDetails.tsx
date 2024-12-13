import useGetTypes from "@/pokemons/hooks/useGetTypes";
import { PokemonAPI, StatKey } from "@/pokemons/types/PokemonAPI";
import { APP_ROUTES } from "@/shared/constants/routes";
import { Link } from "react-router";
import "./PokemonDetails.scss";

const PokemonDetails = ({ pokemon }: { pokemon: PokemonAPI }) => {
  const { types, isLoading, typesError } = useGetTypes();
  return (
    <>
      {typesError && <p>{typesError}</p>}

      {isLoading && (
        <p>Nous chargeons les types du pokédex, un peu de patience...</p>
      )}
      <div className="pokemon-details__card">
        <div className="pokemon-details__header">
          <div className="pokemon-details__text">
            <div className="pokemon-details__title">
              <h1>
                {pokemon.name} [Gen {pokemon.apiGeneration}]
              </h1>
            </div>
            <div className="pokemon-details__types">
              {pokemon.apiTypes.map((type, index) => (
                <div key={index} className="pokemon-details__type">
                  <div className="pokemon-details__type-img">
                    <img
                      className="img"
                      src={type.image}
                      alt={`Icone du type ${type.name}`}
                    />
                  </div>
                  <p>{type.name}</p>
                </div>
              ))}
            </div>
            <div className="pokemon-details__pre-evolution">
              <p>
                Pré évolution:{" "}
                {pokemon.apiPreEvolution === "none" ? (
                  "Aucune"
                ) : (
                  <Link
                    to={`${APP_ROUTES.POKEMONS}/${
                      pokemon.apiPreEvolution.pokedexId ??
                      pokemon.apiPreEvolution.pokedexIdd ??
                      ""
                    }`}
                  >
                    {pokemon.apiPreEvolution.name}
                  </Link>
                )}
              </p>
            </div>
            <div className="pokemon-details__evolutions">
              <p>Evolution{pokemon.apiEvolutions?.length > 1 ? "s" : ""}:</p>
              {!!pokemon.apiEvolutions?.length ? (
                <>
                  {pokemon.apiEvolutions.map((evolution) => (
                    <Link
                      key={evolution.pokedexId}
                      to={`${APP_ROUTES.POKEMONS}/${evolution.pokedexId}`}
                    >
                      {evolution.name}
                    </Link>
                  ))}
                </>
              ) : (
                <p>Aucune</p>
              )}
            </div>
          </div>
          <div className="pokemon-details__img">
            <img
              src={pokemon.image}
              alt={`Image du Pokémon appelé ${pokemon.name}`}
              className="img"
            />
          </div>
        </div>
        <div className="pokemon-details__block">
          <div className="pokemon-details__stats">
            <p>Stats</p>
            <ul>
              {Object.keys(pokemon.stats).map((stat) => (
                <li key={`${stat}${pokemon.id}`}>
                  <p>{pokemon.stats[stat as StatKey]}</p>
                  <p>{stat.replace("_", " ")}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pokemon-details__resistances">
            <p>Résistances</p>
            <ul>
              {pokemon.apiResistances
                .sort((a, b) =>
                  a.damage_relation.localeCompare(b.damage_relation)
                )
                .map((resistance, index) => (
                  <li key={index}>
                    {!!types?.length && (
                      <>
                        <div className="pokemon-details__resistances-img">
                          <img
                            src={
                              types?.find(
                                (type) => type.name === resistance.name
                              )?.image
                            }
                            alt={resistance.name}
                            className="img"
                          />
                        </div>
                        <p>{resistance.damage_relation}</p>
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
