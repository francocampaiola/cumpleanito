import { Button, Grid } from "@chakra-ui/react"
import { BirthdayCard } from "../BirthdayCard"

export const Birthdays = () => {
  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={5}>
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
      </Grid>
      <Button colorScheme={'gray'}>Ver todos los cumpleaños</Button>
    </>
  )
}
