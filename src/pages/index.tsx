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
          <VStack spacing={'50px'} width={'100%'}>
            <VStack>
              <Heading fontFamily={'sans-serif'}>Celebrar sin olvidar</Heading>
              <Text fontFamily={'body'} fontSize={'sm'} maxW={'md'} textAlign={'center'}>Cumpleanito es la plataforma perfecta para recordar y celebrar los cumpleaños de tus amigos y seres queridos.</Text>
            </VStack>
            <VStack>
              <InputGroup size={'md'} width={'450px'} rounded={'full'}>
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
              <Text fontSize={'xs'}>Es gratis y toma menos de un minuto.</Text>
            </VStack>
          </VStack>
        </Container>
      </MainLayout>
    </>
  )
}
