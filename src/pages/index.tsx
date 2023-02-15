import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack 
  } from "@chakra-ui/react";
import { MainLayout } from "layouts";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Container maxW={'5xl'} marginTop={'80px'}>
          <VStack spacing={'50px'}>
            <VStack>
              <Heading>Celebrar sin olvidar</Heading>
              <Text fontSize={'sm'} maxW={'md'} textAlign={'center'}>Cumpleanito es la plataforma perfecta para recordar y celebrar los cumpleaños de tus amigos y seres queridos.</Text>
            </VStack>
            <InputGroup size={'md'} maxW={'lg'} rounded={'full'}>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                children='cumpleanito.app/'
                width={'150px'}
              />
              <Input placeholder='usuario' paddingLeft={'138px'} />
              <InputRightElement width='7rem'>
                <Button h='1.75rem' size='sm' colorScheme={'blue'}>
                  Crear página
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Container>
      </MainLayout>
    </>
  )
}
