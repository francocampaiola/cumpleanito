import { FC } from "react"
import { Avatar, Button, Card, CardBody, CardFooter, Center, Divider, Stack, Text } from "@chakra-ui/react"
import Link from "next/link";

interface Props {
    name: string,
    birthday: string,
    contact: string
}

export const BirthdayCard: FC<Props> = ({ name, birthday, contact }) => {

    const parts = birthday.split('/');
    const birthdayDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));


    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const timeDiff = nextBirthday.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return (
        <Card maxW='sm'>
            <CardBody>
                <Center>
                    <Avatar size={'lg'} name={name} />
                </Center>
                <Stack mt='6' spacing='2'>
                    <Center>
                        <Text fontSize={'sm'}>{name}</Text>
                    </Center>
                    {today.getMonth() === birthdayDate.getMonth() && today.getDate() === birthdayDate.getDate() ? (
                        <Center>
                            <Link href={'https://wa.me/' + contact} target='_blank'>
                                <Button colorScheme={'blue'} size={'xs'}>¡Saludalo!</Button>
                            </Link>
                        </Center>
                    ) : (
                            <Text fontSize={'xs'} align={'center'}>
                                {daysDiff > 0 ? `${daysDiff} días hasta su cumpleaños` : '¡El cumpleaños es hoy!'}
                            </Text>
                    )}
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Center>
                    <Text fontSize={'xs'}>
                        {birthdayDate.toLocaleString('es-AR', { month: 'long', day: 'numeric' })}
                    </Text>
                </Center>
            </CardFooter>
        </Card >
    )
}

