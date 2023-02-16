import { MainLayout } from "components/layouts";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <MainLayout displayButton={''} textButton={'Ingresar'} variantButton={'solid'} linkButton={'/login'}>
        <Container maxW={'5xl'} h={'2xl'}>
          <VStack spacing={'100px'}>
            <VStack spacing={'50px'} width={'100%'}>
              <VStack>
                <Heading fontFamily={'sans-serif'} marginTop={'80px'}>Celebrar sin olvidar</Heading>
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
                  <Input placeholder='usuario' paddingLeft={'140px'} />
                  <InputRightElement width='8rem'>
                    <Button h='1.75rem' size='sm' colorScheme={'blue'}>
                      Crear página
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text fontSize={'xs'}>Es gratis y toma menos de un minuto.</Text>
              </VStack>
            </VStack>
            <VStack spacing={50}>
              <Heading fontSize={'2xl'}>¿Cómo funciona Cumpleanito?</Heading>
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={6}
                width={'80%'}
              >
                <GridItem>
                  <Image src='home/cumpleanito.svg' width={300} height={'auto'} />
                </GridItem>
                <GridItem>
                  <VStack spacing={30}>
                    <VStack>
                      <Box>
                        <Text as={'b'} fontSize={'xl'}>Crea tu perfil</Text>
                        <Text fontSize={'sm'}>Crea tu usuario en menos de un minuto.</Text>
                      </Box>
                    </VStack>
                    <Box>
                      <Text as={'b'} fontSize={'xl'}>Agrega cumpleaños</Text>
                      <Text fontSize={'sm'}>Agrega los cumpleaños de tus seres queridos.</Text>
                    </Box>
                  </VStack>
                </GridItem>
              </Grid>
            </VStack>
          </VStack>
        </Container>
      </MainLayout>
    </>
  )
}
