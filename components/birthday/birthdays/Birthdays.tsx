import { Button, Grid } from "@chakra-ui/react"
import { BirthdayCard } from "../BirthdayCard"

export const Birthdays = () => {
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={5}>
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
      </Grid>
    </>
  )
}
