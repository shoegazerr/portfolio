import React from 'react'
import {useColorMode} from '@chakra-ui/color-mode'
import {VStack, Flex, Text, Box} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

function Header() {

  const{colorMode} = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
     <Box flexShrink={0}>
      <Image alignSelf='center' mt='20' borderRadius="full" boxShadow='dark-lg'
              boxSize="300px" src="https://i.pinimg.com/564x/57/fb/fe/57fbfe32e0f8a896d82c1141b8fcc9dc.jpg"/>
      </Box>
    </VStack>
  )
}

export default Header