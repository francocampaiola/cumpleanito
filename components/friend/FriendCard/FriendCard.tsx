import Link from 'next/link'
import { Card, CardBody, Center, Avatar, Stack, Button, Divider, CardFooter, Text, HStack, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

export const FriendCard = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <Link href={'/manage/edit-friend'}>
                            <Button colorScheme={'yellow'} size={'xs'}>Editar</Button>
                        </Link>
                        <Button colorScheme={'red'} size={'xs'} onClick={onOpen}>Eliminar</Button>
                        <Modal isOpen={isOpen} size={'xs'} onClose={onClose} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Eliminar amigo</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>¿Estás seguro? Esta operación no tiene deshacer.</Text>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='gray' mr={3} onClick={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button colorScheme={'red'}>Eliminar</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}
