import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Toggle } from '../Toggle'

export const Navbar = () => {
    return (
        <Box
            marginTop={'15px'}
            maxW={'100%'}
            zIndex={1}
            boxShadow={'2xl'}
        >
            <Flex
                align={'center'}
                justify={'space-between'}
                padding={'1rem'}
            >
                <Box>
                    <Link href={'/'}>
                        <Image src='Logo.svg' height={25} width={10} />
                    </Link>
                </Box>
                <HStack>
                    <Button colorScheme={'blue'} size={'sm'}>Ingresar</Button>
                    <Toggle />
                </HStack>
            </Flex>
        </Box>
    )
}
