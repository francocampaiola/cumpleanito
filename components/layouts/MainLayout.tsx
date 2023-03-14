import { FC } from "react"
import { Navbar } from "../UI/Navbar/Navbar"
import { Footer } from "../UI/Footer/Footer"
import { Container } from "@chakra-ui/react"

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