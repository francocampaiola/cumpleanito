import { Container } from "@chakra-ui/react"
import { Navbar } from "components/UI/Navbar"
import { FC } from "react"

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
        </Container>
    )
}