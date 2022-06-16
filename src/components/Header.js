import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import {useColorMode} from '@chakra-ui/color-mode'
import {Stack, Flex, Text, Box} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/button'
import { Image } from '@chakra-ui/react'

function Header() {

  const{colorMode} = useColorMode();
  const isDark = colorMode === "dark";

  /* const {isNotSmallerScreen} = useMediaQuery("(min-wigth:600px)"); */

  return (
    <Stack>
     <Flex>
      <Box flexShrink={0}>
         <Text fontSize="5xl" fontWeight="semibold" >Hi,</Text>
         <Text fontSize="7xl" fontWeight="bold" bgGradient={isDark ? "linear(to-r, coral, peachpuff, pink)" : "linear(to-r, blue, darkturquoise, aquamarine)"} bgClip="text">I'm Shoegazer</Text>
          <Button mt={8} colorScheme={isDark ? "red": "teal"} on click={() =>
              window.open("")}>Contact me</Button>
      </Box>
      <Box flexShrink={0}>
      <Image alignSelf='center'  ml="10" borderRadius="full" boxShadow='dark-lg'
              boxSize="300px" src="https://i.pinimg.com/564x/57/fb/fe/57fbfe32e0f8a896d82c1141b8fcc9dc.jpg"/>
      </Box>

      </Flex>

    </Stack>
  )
}

export default Header