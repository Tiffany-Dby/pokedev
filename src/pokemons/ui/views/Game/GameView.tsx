import BaseLayout from "@/shared/ui/components/BaseLayout/BaseLayout";
import GameBoard from "@/pokemons/ui/components/GameBoard/GameBoard";
import useGetRandomTeam from "@/pokemons/hooks/useGetRandomTeam";

const GameView = () => {
  const { randomTeam } = useGetRandomTeam();

  return (
    <BaseLayout>
      <GameBoard randomTeam={randomTeam} />
    </BaseLayout>
  );
};

export default GameView;
