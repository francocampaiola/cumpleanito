import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { MainLayout } from 'components/layouts'
import React from 'react'

const Explore = () => {
    return (
        <MainLayout
            displayButton={''}
            textButton='Cerrar sesión'
            variantButton={'outline'}
            linkButton='/'
        >
            <Container maxW={'5xl'}>
                <VStack spacing={2}>
                    <VStack marginTop={'10%'} spacing={'1%'} marginBottom={'28%'}>
                        <Heading fontSize={'3xl'}>Hola de nuevo, Franco</Heading>
                        <Text>Te echamos de menos</Text>
                    </VStack>
                    <VStack>
                        <Text>Aquí están en orden los próximos cumpleaños de tus amigos:</Text>
                        <Grid>
                            
                        </Grid>
                    </VStack>
                </VStack>
            </Container>
        </MainLayout>
    )
}

export default Explore