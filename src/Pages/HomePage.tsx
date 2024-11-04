import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";

const HomePage = () => {
  // for filtering: instead of adding a punch of filters then add state to every element we can wrap all the filters(element) in one object query known by query object pattern.
  //  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
  //  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  // now we dont have to use query object, instead we used zustand to manage the state of the app
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
