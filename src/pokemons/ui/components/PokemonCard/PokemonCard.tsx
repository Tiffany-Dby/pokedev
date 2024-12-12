import { useState } from "react";
import "./PokemonCard.scss";
import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import { Link } from "react-router";
import { APP_ROUTES } from "@/shared/constants/routes";

const PokemonCard = ({ pokemon }: { pokemon: PokemonAPI }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className={`pokemon__card${isFlipped ? " pokemon__card--flipped" : ""}`}
      onClick={() => setIsFlipped(true)}
    >
      <div className="pokemon__front">
        <div className="pokemon__header">
          <p>N°{pokemon.pokedexId}</p>
          <p>Gen {pokemon.apiGeneration}</p>
        </div>
        <h3>{pokemon.name}</h3>
        <div className="pokemon__display">
          <div className="pokemon__img">
            <img
              src={pokemon.image}
              alt={`Image du Pokémon appelé ${pokemon.name}`}
              className="img"
            />
          </div>
          <div className="pokemon__details">
            <p>{pokemon.apiTypes.map((type) => type.name).join(" / ")}</p>
          </div>
        </div>
        <ul className="pokemon__stats">
          <li>
            <i className="fa-solid fa-heart"></i>
            {pokemon.stats.HP} Pdv
          </li>
          <li>
            <i className="fa-solid fa-gauge-high"></i>
            {pokemon.stats.speed} Speed
          </li>
          <li>
            <i className="fa-solid fa-hand-fist"></i>
            {pokemon.stats.attack} Attaque
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-burst"></i>
            <i className="fa-solid fa-hand-fist"></i>
            {pokemon.stats.special_attack}
          </li>
          <li>
            <i className="fa-solid fa-shield"></i>
            {pokemon.stats.defense} Défense
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-burst"></i>
            <i className="fa-solid fa-shield"></i>
            {pokemon.stats.special_defense}
          </li>
        </ul>
        <Link to={`${APP_ROUTES.POKEMONS}/${pokemon.id}`}>Détails</Link>
      </div>
      <div className="pokemon__back"></div>
    </article>
  );
};

export default PokemonCard;
