import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const headingName = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return <Heading marginY={5} fontSize='5xl' as="h1">{headingName}</Heading>;
};

export default GameHeading;
