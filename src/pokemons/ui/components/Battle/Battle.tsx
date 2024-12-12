import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import "./Battle.scss";
import { Toast } from "@/shared/types/Toast";

const Battle = ({
  randomPokemon,
  chosenPokemon,
  toast,
  currentChosenHp,
  currentRandomHp,
}: {
  randomPokemon: PokemonAPI | null;
  chosenPokemon: PokemonAPI;
  toast: Toast;
  currentChosenHp: number;
  currentRandomHp: number;
}) => {
  return (
    <>
      {!!chosenPokemon && !!randomPokemon && (
        <article className="gameplay__battle">
          <h3>Battle</h3>
          <div className="gameplay__display">
            <div className="gameplay__pokemon-status gameplay__pokemon-status--random">
              <div>
                <div>
                  <p>{randomPokemon.name}</p>
                  <div>
                    <label htmlFor="championHp">PV</label>
                    <progress
                      id="championHp"
                      max={randomPokemon.stats.HP}
                      value={currentRandomHp}
                    ></progress>
                  </div>
                  <p>
                    {currentRandomHp} / {randomPokemon.stats.HP}
                  </p>
                </div>
                <span className="gameplay__pokemon-status--to-random"></span>
              </div>
            </div>
            <div className="gameplay__pokemon-status gameplay__pokemon-status--champion">
              <div>
                <div>
                  <p>{chosenPokemon.name}</p>
                  <div>
                    <label htmlFor="championHp">PV</label>
                    <progress
                      id="championHp"
                      max={chosenPokemon.stats.HP}
                      value={currentChosenHp}
                    ></progress>
                  </div>
                  <p>
                    {currentChosenHp} / {chosenPokemon.stats.HP}
                  </p>
                </div>
                <span className="gameplay__pokemon-status--to-champion"></span>
              </div>
            </div>

            <div className="gameplay__pokemon-tray gameplay__pokemon-tray--champion"></div>
            <div className="gameplay__pokemon-tray gameplay__pokemon-tray--random"></div>

            <div className="gameplay__pokemon-img gameplay__pokemon-img--champion">
              <img
                src={chosenPokemon.sprite}
                alt={`Sprite de ${chosenPokemon.name}`}
                className="img"
                style={{
                  filter: currentChosenHp ? "grayscale(0)" : "grayscale(100%)",
                }}
              />
            </div>

            <div className="gameplay__pokemon-img gameplay__pokemon-img--random">
              <img
                src={randomPokemon.sprite}
                alt={`Sprite de ${randomPokemon.name}`}
                className="img"
                style={{
                  filter: currentRandomHp ? "grayscale(0)" : "grayscale(100%)",
                }}
              />
            </div>

            <div className="gameplay__combat-status">
              <div className="gameplay__combat-status__message">
                <span>
                  <strong>{toast.title}</strong>
                </span>
                {toast.messages.map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
              </div>
            </div>
            <div className="gameplay__display__shadow"></div>
          </div>
        </article>
      )}
    </>
  );
};

export default Battle;
