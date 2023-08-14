import React from 'react'
import { Avatar, AvatarGroup, Flex, Heading } from '@chakra-ui/react'
const Header = () => {
  return (
    <Flex justifyContent='center' gap={2}>

    <Heading as='h2' size='xl' marginTop='3'>
    Welcome, to Our ChatRoom
  </Heading>
     <AvatarGroup size='md' max={2} marginTop='2'>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
    </Flex>
  )
}

export default Header