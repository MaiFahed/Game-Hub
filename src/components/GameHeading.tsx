import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

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
