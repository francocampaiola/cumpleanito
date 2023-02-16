import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { MainLayout } from 'components/layouts'

const Register = () => {
    return (
        <MainLayout
            displayButton={'none'}
            textButton=''
            variantButton=''
            linkButton='/'
        >
            <Container maxW={'5xl'} h={'2xl'}>
                <VStack spacing={'5%'}>
                    <Heading fontSize={'3xl'} marginTop={'80px'}>Registrarse</Heading>
                    <VStack spacing={10} w={'50%'}>
                        <VStack w={'100%'}>
                            <Input size={'md'} placeholder='Correo electrónico o nombre de usuario'></Input>
                            <Input size={'md'} placeholder='Contraseña'></Input>
                        </VStack>
                        <Button colorScheme={'blue'}>Continuar</Button>
                    </VStack>
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default Register