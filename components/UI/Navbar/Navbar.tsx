import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
    return (
        <Box
            marginTop={'15px'}
            zIndex={1}
        >
            <Flex
                align={'center'}
                justify={'space-between'}
                padding={'1rem'}
            >
                <Box>Logo</Box>
                <Box>Menu</Box>
            </Flex>
        </Box>
    )
}
