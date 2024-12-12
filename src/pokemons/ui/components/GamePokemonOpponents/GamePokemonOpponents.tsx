import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import PokemonOverview from "../PokemonOverview/PokemonOverview";
import "./GamePokemonOpponents.scss";
import Battle from "../Battle/Battle";
import BaseButton from "@/shared/ui/components/BaseButton/BaseButton";
import { Toast } from "@/shared/types/Toast";

const GamePokemonOpponents = ({
  randomPokemon,
  chosenPokemon,
  toast,
  currentChosenHp,
  currentRandomHp,
  resetGame,
}: {
  randomPokemon: PokemonAPI | null;
  chosenPokemon: PokemonAPI;
  toast: Toast;
  currentChosenHp: number;
  currentRandomHp: number;
  resetGame: () => void;
}) => {
  return (
    <section className="gameplay">
      <div className="gameplay__container">
        <h2>Gameplay</h2>
        <BaseButton btnValue="Nouvelle partie" btnClick={resetGame} />
        <div className="gameplay__opponents">
          <div className="gameplay__opponents--slide-right">
            <span>Votre champion</span>
            <PokemonOverview
              pokemon={chosenPokemon}
              className=" pokemon-overview--slide-right"
            />
          </div>
          <>
            {!!randomPokemon && (
              <>
                <span>VS</span>
                <div className="gameplay__opponents--slide-left">
                  <span>Votre adversaire</span>
                  <PokemonOverview
                    pokemon={randomPokemon}
                    className=" pokemon-overview--slide-left"
                  />
                </div>
              </>
            )}
          </>
        </div>
        <Battle
          randomPokemon={randomPokemon}
          chosenPokemon={chosenPokemon}
          currentChosenHp={currentChosenHp}
          currentRandomHp={currentRandomHp}
          toast={toast}
        />
      </div>
    </section>
  );
};
export default GamePokemonOpponents;
