import { useParams } from "react-router-dom"
import useDetailGame from "../hooks/useDetailGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
    const { slug } = useParams();
    const {data: game, isLoading, error} = useDetailGame(slug!); // ! means that the slug will never be null

    if(isLoading) return <Spinner />;
    if(error || !game) throw error;
  return (
    <>
    <Heading>{game.name}</Heading>
    <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetailPage