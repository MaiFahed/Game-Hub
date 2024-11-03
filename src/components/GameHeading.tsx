import { Heading } from "@chakra-ui/react";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";
import useGameQueryStore from "../store";


const GameHeading = () => {

  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenreId(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatformId(platformId);

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
