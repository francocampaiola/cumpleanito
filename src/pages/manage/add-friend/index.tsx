import { Avatar, Box, Button, Container, Heading, HStack, Input, Spacer, Text, VStack } from '@chakra-ui/react'
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
                <VStack spacing={'100px'}>
                    <Heading fontSize={'3xl'} marginTop={'150px'}>Agregar amigo</Heading>
                    <HStack justifyContent={'center'} spacing={'50px'}>
                        <Box>
                            <Avatar size={'2xl'} name={'Nombre Apellido'} />
                        </Box>
                        <Box>
                                <Box marginBottom={'15px'}>
                                        <Text textAlign={'left'}>Nombre</Text>
                                        <Input required placeholder='Nombre Apellido'></Input>
                                </Box>
                                <Box>
                                        <Text>Fecha de nacimiento</Text>
                                        <Input required type={'date'}></Input>
                                </Box>
                        </Box>
                    </HStack>
                    <HStack>
                        <Button>
                            Cancelar
                        </Button>
                        <Button colorScheme={'green'}>
                            Agregar amigo
                        </Button>
                    </HStack>
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default AddFriend