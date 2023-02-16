import { MainLayout } from 'components/layouts'
import { Friends } from 'components/friend/friends'
import { Container, VStack, Heading, Text, Button, Flex, Spacer } from '@chakra-ui/react'

const Manage = () => {
    return (
        <MainLayout
            displayButton={''}
            textButton='Cerrar sesión'
            variantButton={'outline'}
            linkButton='/'
        >
            <Container maxW={'5xl'}>
                <VStack spacing={2} marginBottom={'25%'} >
                    <VStack marginBottom={'5%'} marginTop={'10%'} spacing={'1%'}>
                        <Heading fontSize={'3xl'}>Administrar amigos</Heading>
                        <Text>Agrega, modifica o elimina los cumpleaños de tus amigos</Text>
                    </VStack>
                    <Flex w={'2xl'} bgColor={'gray.700'} p={2} alignItems={'center'}>
                        <Spacer />
                        <Button size={'xs'} bgColor={'green.600'} textColor={'white'}>Agregar amigo</Button>
                    </Flex>
                    <Friends />
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default Manage