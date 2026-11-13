import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenre from "../hooks/useGenre";
import useGenreId from "../hooks/useGenreId";
import useGameQueryStore from "../store";

// Drop-down version of the genre list, shown on phones and tablets
// where the side list is hidden.
const GenreSelector = () => {
  const { data, error } = useGenre();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);
  const selectedGenre = useGenreId(selectedGenreId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genres"}
      </MenuButton>
      <MenuList maxHeight="60vh" overflowY="auto">
        {data?.results.map((genre) => (
          <MenuItem onClick={() => onSelectGenre(genre.id)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
