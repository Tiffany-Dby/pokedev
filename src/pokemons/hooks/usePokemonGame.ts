import { useState } from "react";
import { PokemonAPI } from "../types/PokemonAPI";
import { randomNumberFromInterval } from "@/shared/utils/random";
import { Toast } from "@/shared/types/Toast";

const usePokemonGame = (
  randomTeam: PokemonAPI[] | null,
  refreshRandomTeam: () => void
) => {
  const [chosenPokemon, setChosenPokemon] = useState<PokemonAPI | null>(null);
  const [chosenHp, setChosenHp] = useState(0);
  const [randomPokemon, setRandomPokemon] = useState<PokemonAPI | null>(null);
  const [randomHp, setRandomHp] = useState(0);
  const [toast, setToast] = useState<Toast>({
    title: "",
    messages: [],
    isVisible: false,
  });

  const resetGame = () => {
    setChosenPokemon(null);
    setRandomPokemon(null);
    setToast({
      title: "",
      messages: [],
      isVisible: false,
    });
    refreshRandomTeam();
  };

  const calculateDamage = (
    attacker: PokemonAPI,
    defender: PokemonAPI
  ): number => {
    let maxMultiplier = 0;

    attacker.apiTypes.forEach((type) => {
      defender.apiResistances.forEach((resistance) => {
        if (type.name === resistance.name) {
          maxMultiplier = Math.max(maxMultiplier, resistance.damage_multiplier);
        }
      });
    });

    return Math.floor(attacker.stats.attack * maxMultiplier);
  };

  const simulateBattle = (chosen: PokemonAPI, random: PokemonAPI) => {
    let localChosenHP = chosen.stats.HP;
    let localRandomHP = random.stats.HP;
    setChosenHp(localChosenHP);
    setRandomHp(localRandomHP);

    let turn = 1;
    let currentPlayer =
      chosen.stats.speed >= random.stats.speed ? "chosen" : "random";

    const takeTurn = () => {
      if (localChosenHP <= 0 || localRandomHP <= 0) {
        const winner = localChosenHP > 0 ? chosen : random;

        setToast({
          title: "Combat terminé",
          messages: [`${winner.name} gagne le combat !`],
          isVisible: true,
        });

        return;
      }

      if (currentPlayer === "chosen") {
        const damage = calculateDamage(chosen, random);
        localRandomHP = Math.max(localRandomHP - damage, 0);
        setRandomHp(localRandomHP);

        setToast({
          title: `Tour ${turn}`,
          messages: [
            `${chosen.name} attaque !`,
            `${random.name} prend ${damage} points de dégats.`,
          ],
          isVisible: false,
        });

        currentPlayer = "random";
      } else {
        const damage = calculateDamage(random, chosen);
        localChosenHP = Math.max(localChosenHP - damage, 0);
        setChosenHp(localChosenHP);

        setToast({
          title: `Tour ${turn}`,
          messages: [
            `${random.name} attaque !`,
            `${chosen.name} prend ${damage} points de dégats.`,
          ],
          isVisible: false,
        });

        currentPlayer = "chosen";
      }

      turn++;
      setTimeout(takeTurn, 3000);
    };

    setTimeout(() => {
      setToast({
        title: "Combat",
        messages: ["Préparez-vous !", "Le combat va commencer..."],
        isVisible: false,
      });
    }, 2500);

    setTimeout(takeTurn, 7500);
  };

  const startGame = (chosen: PokemonAPI) => {
    if (!chosen || !randomTeam?.length) return;

    setChosenPokemon(chosen);

    setTimeout(() => {
      setRandomPokemon(randomTeam[0]);
      setToast({
        title: "Alerte",
        messages: [`Un ${randomTeam[0].name} sauvage apparaît !`],
        isVisible: true,
      });

      simulateBattle(chosen, randomTeam[0]);
    }, randomNumberFromInterval(3, 10) * 1000);
  };

  return {
    chosenPokemon,
    chosenHp,
    randomPokemon,
    randomHp,
    toast,
    resetGame,
    startGame,
    setToast,
  };
};

export default usePokemonGame;
