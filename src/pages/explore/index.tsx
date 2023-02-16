import { Birthdays } from 'components/birthday/birthdays'
import { MainLayout } from 'components/layouts'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'

const Explore = () => {
    return (
        <MainLayout
            displayButton={''}
            textButton='Cerrar sesión'
            variantButton={'outline'}
            linkButton='/'
        >
            <Container maxW={'5xl'} h={'2xl'}>
                <VStack spacing={2} marginBottom={'4%'}>
                    <VStack marginBottom={'5%'} marginTop={'10%'} spacing={'1%'}>
                        <Heading fontSize={'3xl'}>Hola de nuevo, Franco</Heading>
                        <Text>Te echamos de menos</Text>
                    </VStack>
                    <VStack spacing={'5%'}>
                        <Text>Aquí están en orden los próximos cumpleaños de tus amigos:</Text>
                        <Birthdays />
                    </VStack>
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default Explore