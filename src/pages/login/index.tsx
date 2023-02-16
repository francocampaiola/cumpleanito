import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { MainLayout } from 'components/layouts'

const Login = () => {
    return (
        <MainLayout
            displayButton={''}
            textButton='Crear cuenta'
            variantButton={'outline'}
            linkButton='/register'
        >
            <Container maxW={'5xl'} h={'2xl'}>
                <VStack spacing={'5%'}>
                    <Heading fontSize={'3xl'} marginTop={'80px'}>Ingresar</Heading>
                    <VStack spacing={10} w={'50%'}>
                        <VStack w={'100%'}>
                            <Input size={'md'} placeholder='Nombre de usuario'></Input>
                            <Input size={'md'} placeholder='Contraseña'></Input>
                        </VStack>
                        <Button colorScheme={'blue'}>Continuar</Button>
                    </VStack>
                    <VStack spacing={5}>
                        <Text fontSize={'sm'}>Olvidé mi contraseña</Text>
                    </VStack>
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default Login