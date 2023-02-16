import { Avatar, Box, Container, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { MainLayout } from 'components/layouts'
import React from 'react'

const AddFriend = () => {
    return (
        <MainLayout
            displayButton={''}
            textButton='Cerrar sesión'
            variantButton={'outline'}
            linkButton='/'
        >
            <Container maxW={'5xl'} h={'2xl'}>
                {/* <VStack marginTop={'10%'} spacing={'5%'} marginBottom={'36%'}>
                    <Heading fontSize={'3xl'}>Agregar amigo</Heading>
                    <VStack spacing={10} w={'50%'}>
                        <VStack w={'100%'}>
                            <Input size={'md'} placeholder='Correo electrónico o nombre de usuario'></Input>
                            <Input size={'md'} placeholder='Contraseña'></Input>
                        </VStack>
                        <Button colorScheme={'blue'}>Continuar</Button>
                    </VStack>
                </VStack> */}
                <VStack>
                    <Heading fontSize={'3xl'} marginTop={'150px'}>Agregar amigo</Heading>
                    <HStack justifyContent={'center'} spacing={5}>
                        <Box>
                            <Avatar />
                        </Box>
                        <Box>
                            <VStack>
                                <Text>Nombre</Text>
                                <Text>Fecha de nacimiento</Text>
                            </VStack>
                        </Box>
                    </HStack>
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default AddFriend