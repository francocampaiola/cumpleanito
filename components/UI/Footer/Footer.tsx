import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Box
            marginTop={'15px'}
            padding={'1rem'}
            maxW={'100%'}
            zIndex={1}
            boxShadow={'2xl'}
            position={'relative'}
        >
            <Flex
                align={'center'}
                justify={'space-between'}
                padding={'1rem'}
            >
                <HStack>
                    <Text fontSize={'sm'}>FAQs</Text>
                    <Text fontSize={'sm'}>|</Text>
                    <Text fontSize={'sm'}>Política de privacidad</Text>
                    <Text fontSize={'sm'}>|</Text>
                    <Text fontSize={'sm'}>Términos y condiciones</Text>
                </HStack>
                <Spacer />
                <HStack>
                    <Text fontSize={'sm'}>{year} © Cumpleanito</Text>
                </HStack>
            </Flex>
        </Box>
    )
}
