import React from 'react'
import {VStack, Flex, Text, Box, Link} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/button'
import {useColorMode} from '@chakra-ui/color-mode'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import Section from './Section'
import { Image } from '@chakra-ui/react'
import { IGEmbed } from 'react-ig-embed';

function Profile() {
  const{colorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
    flexShrink={0}
    mt={{ base: 4, md: 0 }}
    ml={{ md: 6 }}
    textAlign="center"
  >
    <Section>
    <Text fontSize="5xl" fontWeight="bold" bgGradient={isDark ? "linear(to-r, coral, peachpuff, pink)" : "linear(to-r, blue, darkturquoise, aquamarine)"} bgClip="text">
      Hi, I'm Shoegazer
    </Text>
    </Section>
    <Section>
    <Text align='left' ml='5' fontSize="2xl" fontWeight="light">
      I am 20 years old musician and beginner photographer based in Moscow.
    </Text>
    </Section>
    <Section delay={1.0}>
    <Box p={4} display={{ md: 'flex' }}>
  <Box flexShrink={0}>
  <IGEmbed url="https://www.instagram.com/p/BoBfnNghWQg/" />
  </Box>
  <Box alignSelf='right' mt={{ base: 4, md: 0 }} ml={{ md: 20 }}>
  <IGEmbed url="https://www.instagram.com/p/Bp6dDYHheei/" />
    </Box>
    </Box>
    </Section>
    {/*<Box align='left' my={4}>
  {/*<Link>
   <Button ml='5' rightIcon={<ChevronRightIcon />} colorScheme={isDark ? "red": "teal"}>Contact me</Button>
  </Link>

  </Box>
       <IGEmbed url="https://www.instagram.com/p/BoBfnNghWQg/?utm_source=ig_web_copy_link" /> 
      <IGEmbed url="https://www.instagram.com/p/Bp6dDYHheei/" />*/}
   </Box>
  )
}

export default Profile