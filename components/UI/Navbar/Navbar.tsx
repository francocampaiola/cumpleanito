import Link from 'next/link'
import { Toggle } from 'components/ui/Toggle'
import { Box, Flex, HStack, Image } from '@chakra-ui/react'

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
                        <Image src='/Logo.svg' height={25} width={10} />
                    </Link>
                </Box>
                <HStack>
                    <Toggle />
                </HStack>
            </Flex>
        </Box>
    )
}
