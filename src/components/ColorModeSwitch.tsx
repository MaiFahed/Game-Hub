import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack>
        <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} aria-label="Dark mode"/>
        {/* the words are hidden on phones to leave room for the search box */}
        <Text whiteSpace='nowrap' display={{ base: 'none', md: 'block' }}>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch