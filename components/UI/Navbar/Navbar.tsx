import { FC } from 'react'
import Link from 'next/link'
import { Toggle } from 'components/ui/Toggle'
import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'

interface Props {
    textButton: string,
    variantButton: string,
    linkButton: string,
    displayButton: string
}

export const Navbar: FC<Props> = ({ textButton, variantButton, linkButton, displayButton }) => {
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
                    <Link href={'/explore'}>
                        <Button colorScheme={'red'} size={'sm'}>Explorar</Button>
                    </Link>
                    <Link href={'/manage'}>
                        <Button colorScheme={'red'} size={'sm'}>Administrar</Button>
                    </Link>
                    <Link href={linkButton}>
                        <Button display={displayButton} variant={variantButton} colorScheme={'blue'} size={'sm'}>{textButton}</Button>
                    </Link>
                    <Toggle />
                </HStack>
            </Flex>
        </Box>
    )
}
