import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      {/* flexShrink 0 keeps the logo visible on phones (it used to be squeezed to nothing) */}
      <Link to={"/"} style={{ flexShrink: 0 }}>
        <Image src={logo} boxSize={{ base: "44px", md: "60px" }} objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
