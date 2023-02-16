import { FC } from "react"
import { Navbar } from "components/UI/Navbar"
import { Footer } from "components/UI/Footer"
import { Container } from "@chakra-ui/react"
import { link } from "fs"

interface Props {
    children: React.ReactNode
    linkButton: string,
    variantButton: string,
    textButton: string,
    displayButton: string
}

export const MainLayout: FC<Props> = ({ children, linkButton, textButton, variantButton, displayButton }) => {
    return (
        <Container
            maxW={'5xl'}
        >
            <Navbar textButton={textButton} linkButton={linkButton} variantButton={variantButton} displayButton={displayButton} />
            <Container
                maxW={'5xl'}
            >
                {children}
            </Container>
            <Footer />
        </Container>
    )
}