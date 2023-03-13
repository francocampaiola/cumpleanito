import { Box, Flex, HStack, Image } from '@chakra-ui/react'
import Toggle from 'components/ui/Toggle'

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
                    <Image src='/Logo.svg' alt='logo' height={25} width={10} />
                </Box>
                <HStack>
                    <Toggle />
                </HStack>
            </Flex>
        </Box>
    )
}
