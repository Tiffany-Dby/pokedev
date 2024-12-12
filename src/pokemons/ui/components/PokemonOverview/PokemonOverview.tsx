import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import "./PokemonOverview.scss";

const PokemonOverview = ({
  pokemon,
  className = "",
  onClick,
}: {
  pokemon: PokemonAPI;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <article className={`pokemon-overview${className}`} onClick={onClick}>
      <div className="pokemon-overview__img">
        <img
          src={pokemon.image}
          alt={`Image du Pokémon appelé ${pokemon.name}`}
          className="img"
        />
      </div>
      <div className="pokemon-overview__text">
        <h3>{pokemon.name}</h3>
      </div>
    </article>
  );
};

export default PokemonOverview;
