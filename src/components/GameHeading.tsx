import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreId(gameQuery.genreId);
  const platform = usePlatformId(gameQuery.platformId);

  const headingName = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {headingName}
    </Heading>
  );
};

export default GameHeading;
