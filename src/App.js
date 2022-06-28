import {Flex, VStack, Heading, Text} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react";
import {FaInstagram, FaGithub, FaSun, FaMoon, FaVk, FaBandcamp, FaTelegram} from 'react-icons/fa'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {useColorMode} from '@chakra-ui/color-mode'
import Header from './components/Header'
import { Link } from '@chakra-ui/react'
import Social from './components/Social'
import Profile from './components/Profile'
import Navigation from './components/Navigation'
import { Image } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import {Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react'
import Section from './components/Section'

function App() {

const {colorMode, toggleColorMode} = useColorMode();
const isDark = colorMode === "dark";
const {isNotSmallerScreen} = useMediaQuery("(min-wigth:600px)");

  return (
    <VStack>
      <Navigation></Navigation>
      <Header></Header>
            <Section delay={0.1}>
      <Profile></Profile>
      </Section>
    </VStack>
  );
}

export default App;
