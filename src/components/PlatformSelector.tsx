import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatformId from "../hooks/usePlatformId";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const onSelectPlatform = useGameQueryStore(s => s.setPlatformId);

  const selectedPlatform = usePlatformId(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms' }
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={()=> onSelectPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
