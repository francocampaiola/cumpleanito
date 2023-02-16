import { FriendCard } from '../FriendCard'
import { Grid } from '@chakra-ui/react'

export const Friends = () => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={5}>
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
        </Grid>
    )
}
