import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import BaseToast from "@/shared/ui/components/BaseToast/BaseToast";
import usePokemonGame from "@/pokemons/hooks/usePokemonGame";
import GamePokemonSelector from "@/pokemons/ui/components/GamePokemonSelector/GamePokemonSelector";
import GamePokemonOpponents from "@/pokemons/ui/components/GamePokemonOpponents/GamePokemonOpponents";
import "./GameBoard.scss";
import { createPortal } from "react-dom";

const GameBoard = ({
  randomTeam,
  refreshRandomTeam,
}: {
  randomTeam: PokemonAPI[] | null;
  refreshRandomTeam: () => void;
}) => {
  const {
    chosenPokemon,
    chosenHp,
    randomPokemon,
    randomHp,
    toast,
    resetGame,
    startGame,
    setToast,
  } = usePokemonGame(randomTeam, refreshRandomTeam);

  return (
    <>
      <section className="game-rules">
        <div className="game-rules__container">
          {createPortal(
            <BaseToast
              toast={toast}
              btnClick={() =>
                setToast({ title: "", messages: [], isVisible: false })
              }
            />,
            document.body
          )}
          <h1>Game</h1>
          <article>
            <h3>Présentation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorem similique possimus. Odit molestias veritatis nihil, ipsa
              voluptatum culpa ut!
            </p>
          </article>
          <article>
            <h3>Les règles :</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Corporis, voluptate?
            </p>
          </article>
          {!chosenPokemon && !randomPokemon && (
            <GamePokemonSelector onPokemonSelect={startGame} />
          )}
        </div>
      </section>
      {!!chosenPokemon && (
        <GamePokemonOpponents
          chosenPokemon={chosenPokemon}
          randomPokemon={randomPokemon}
          toast={toast}
          currentChosenHp={chosenHp}
          currentRandomHp={randomHp}
          resetGame={resetGame}
        />
      )}
    </>
  );
};

export default GameBoard;
