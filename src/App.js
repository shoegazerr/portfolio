import {Flex, VStack, Heading, Spacer} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react";
import {FaInstagram, FaGithub, FaSun, FaMoon, FaVk} from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode'
import Header from './components/Header'
import Social from './components/Social'
import Profile from './components/Profile'

function App() {

const {colorMode, toggleColorMode} = useColorMode();
const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight="semibold" color="peachpuff">hello</Heading>
        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaVk/>} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun/>: <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
