import { Card, CardBody, Center, Avatar, Stack, Button, Divider, CardFooter, Text, HStack } from '@chakra-ui/react'

export const FriendCard = () => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Center>
                    <Avatar size={'lg'} name='Franco Campaiola' />
                </Center>
                <Stack mt='6' spacing='3'>
                    <Center>
                        <Text fontSize={'sm'}>Franco Campaiola</Text>
                    </Center>
                    <HStack>
                        <Button colorScheme={'blue'} size={'xs'}>Editar</Button>
                        <Button colorScheme={'red'} size={'xs'}>Eliminar</Button>
                    </HStack>
                </Stack>
            </CardBody>
            <Divider />
        </Card>
    )
}
