import { Avatar, Button, Card, CardBody, CardFooter, Center, Divider, Stack, Text } from "@chakra-ui/react"

export const BirthdayCard = () => {
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
                    <Center>
                        <Text fontSize={'sm'}>Hoy es su cumpleaños</Text>
                    </Center>
                    <Button colorScheme={'blue'}>Saludar</Button>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Center>
                    <Text fontSize={'xs'}>8 de octubre</Text>
                </Center>
            </CardFooter>
        </Card>
    )
}
