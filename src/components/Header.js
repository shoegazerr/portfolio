import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import {useColorMode} from '@chakra-ui/color-mode'
import {Stack, Flex, Text} from '@chakra-ui/layout'

function Header() {

  const{colorMode} = useColorMode();
  const isDark = colorMode =="dark";

  const {isNotSmallerScreen} = useMediaQuery("(min-wigth:600px)");

  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
             spacing ="200px" p={isNotSmallerScreen ? "32" : "0"}
             alignSelf="flex-start">
      <Text fontSize="5x1" fontWeight="semibold" >Hello</Text>


      </Flex>

    </Stack>
  )
}

export default Header