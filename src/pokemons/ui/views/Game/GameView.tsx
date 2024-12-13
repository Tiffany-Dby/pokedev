import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import GameBoard from "@/pokemons/ui/components/GameBoard/GameBoard";
import useGetRandomTeam from "@/pokemons/hooks/useGetRandomTeam";

const GameView = () => {
  const { randomTeam, refreshRandomTeam } = useGetRandomTeam();

  return (
    <BaseLayout>
      <GameBoard
        randomTeam={randomTeam}
        refreshRandomTeam={refreshRandomTeam}
      />
    </BaseLayout>
  );
};

export default GameView;
