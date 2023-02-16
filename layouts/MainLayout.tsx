import { FC } from "react"
import { Navbar } from "components/UI/Navbar"
import { Container } from "@chakra-ui/react"
import { Footer } from "components/UI/Footer"

interface Props {
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Container
            maxW={'5xl'}
        >
            <Navbar />
            <Container
                maxW={'5xl'}
            >
                {children}
            </Container>
            <Footer />
        </Container>
    )
}