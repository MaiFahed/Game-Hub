import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {


  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        ordered by
      </MenuButton>
      <MenuList>
        <MenuItem>option 1</MenuItem>
        <MenuItem>option 1</MenuItem>
        <MenuItem>option 1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
