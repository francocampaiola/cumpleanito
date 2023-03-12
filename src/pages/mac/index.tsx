import { Birthdays } from 'components/birthday/birthdays'
import { MainLayout } from 'components/layouts'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'

const Mac = () => {
    return (
        <MainLayout>
            <Container maxW={'5xl'} h={'7.5xl'}>
                <VStack spacing={2} marginBottom={'4%'}>
                    <VStack marginBottom={'5%'} marginTop={'10%'} spacing={'1%'}>
                        <Heading fontSize={'3xl'}>Hola de nuevo</Heading>
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

export default Mac
