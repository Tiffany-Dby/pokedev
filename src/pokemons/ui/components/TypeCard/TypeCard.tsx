import { PokemonTypeAPI } from "@/pokemons/types/PokemonTypeAPI";
import "./TypeCard.scss";

const TypeCard = ({ type }: { type: PokemonTypeAPI }) => {
  return (
    <>
      <article className="type-card">
        <div className="type-card__img">
          <img src={type.image} alt={`Type ${type.name}`} className="img" />
        </div>
        <div className="type-card__text">
          <h3>{type.name}</h3>
        </div>
      </article>
    </>
  );
};

export default TypeCard;
