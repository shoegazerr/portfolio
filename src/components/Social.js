import { Flex, HStack} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react"
import React from 'react'
import {FaInstagram, FaGithub, FaSun, FaMoon, FaVk, FaBandcamp, FaTelegram} from 'react-icons/fa'

function Social() {
  return (
<Flex>
  <HStack spacing='5'>
  <IconButton icon={<FaBandcamp/>} boxSize='50' on click={() =>
              window.open("")}/>
        <IconButton icon={<FaInstagram/>} boxSize='50' on click={() =>
              window.open("")}/>
  </HStack>
</Flex>
  )
}

export default Social