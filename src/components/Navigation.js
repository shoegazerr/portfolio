import React from 'react'
import {Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, Spacer} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import {useColorMode} from '@chakra-ui/color-mode'
import {FaInstagram, FaGithub, FaSun, FaMoon, FaVk, FaBandcamp, FaTelegram} from 'react-icons/fa'

function Navigation() {
const {colorMode, toggleColorMode} = useColorMode();
const isDark = colorMode === "dark";
  return (
    <Box
    position="fixed"
    as="nav"
    w="100%"
    zIndex={1}
  >
    <Container
      display="flex"
      p={2}
      maxW="container.md"
      wrap="wrap"
      align="center"
      justify="space-between"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size='lg' letterSpacing={'tighter'} fontWeight="semibold"></Heading>
      </Flex>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href="/" color={isDark ? "peachpuff": "blue"}>
            hello
        </Link>
        <Link href="/works" color={isDark ? "white": "black"}>
          Works
        </Link>
        <Link href="/posts" color={isDark ? "white": "black"}>
          Posts
        </Link>
        <Link color={isDark ? "white": "black"}
          target="_blank"
          href="https://github.com/shoegazerr"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <IoLogoGithub />
          My Github
        </Link>
      </Stack>

      <Box flex={1} align="right">

        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              aria-label="Options"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem as={Link}>About</MenuItem>
              </Link>
              <Link href="/works" passHref>
                <MenuItem as={Link}>Works</MenuItem>
              </Link>
              <Link href="/posts" passHref>
                <MenuItem as={Link}>Posts</MenuItem>
              </Link>
              <MenuItem
                as={Link}
                href="https://github.com/shoegazerr"
              >
                View Source
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <IconButton ml={3} icon={isDark ? <FaSun/>: <FaMoon />}  onClick={toggleColorMode}></IconButton>
    </Container>
  </Box>
  )
}

export default Navigation