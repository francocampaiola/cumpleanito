import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { MainLayout } from 'layouts'

const Login = () => {
    return (
        <MainLayout
            displayButton={''}
            textButton='Crear cuenta'
            variantButton={'outline'}
            linkButton='/register'
        >
            <Container maxW={'5xl'}>
                <VStack marginTop={'10%'} spacing={'5%'} marginBottom={'28%'}>
                    <Heading fontSize={'3xl'}>Ingresar</Heading>
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