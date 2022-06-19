import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import {useColorMode} from '@chakra-ui/color-mode'
import {VStack, Flex, Text, Box} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/button'
import { Image } from '@chakra-ui/react'

function Header() {

  const{colorMode} = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
     <Box flexShrink={0}>
      <Image alignSelf='center' mt='10' ml="10" borderRadius="full" boxShadow='dark-lg'
              boxSize="300px" src={isDark ? "https://i.pinimg.com/564x/57/fb/fe/57fbfe32e0f8a896d82c1141b8fcc9dc.jpg" : "https://i5.walmartimages.com/asr/8f716f20-98c6-46bd-a390-3863f0e0a4f3.8256601ad9b14c9dba39465cd7fa9bc2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"}/>
      </Box>
      <Flex>
      <Box flexShrink={0}>
         <Text fontSize="5xl" fontWeight="semibold" >Hi,</Text>
         <Text fontSize="7xl" fontWeight="bold" bgGradient={isDark ? "linear(to-r, coral, peachpuff, pink)" : "linear(to-r, blue, darkturquoise, aquamarine)"} bgClip="text">I'm Shoegazer</Text>
          <Button mt={8} colorScheme={isDark ? "red": "teal"} on click={() =>
              window.open("")}>My Contacts</Button>
      </Box>
      </Flex>
    </VStack>
  )
}

export default Header