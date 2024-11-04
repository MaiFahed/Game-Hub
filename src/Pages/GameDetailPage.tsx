import { useParams } from "react-router-dom";
import useDetailGame from "../hooks/useDetailGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useDetailGame(slug!); // ! means that the slug will never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}/>
    </>
  );
};

export default GameDetailPage;
