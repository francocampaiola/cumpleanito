import { Grid } from "@chakra-ui/react"
import { BirthdayCard } from "../BirthdayCard"
import { birthdays } from "constants/birthdays"

export const Birthdays = () => {
  const birthdayList = birthdays.map((bday) => {
    const parts = bday.birthday.split('/');
    const birthdayDate = new Date(
      new Date().getFullYear(),
      parseInt(parts[1]) - 1,
      parseInt(parts[0])
    );
    const today = new Date();
    const nextBirthday = new Date(
      today.getFullYear(),
      birthdayDate.getMonth(),
      birthdayDate.getDate()
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const timeDiff = nextBirthday.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return {
      ...bday,
      birthdayDate,
      daysDiff,
    };
  });

  const sortedList = birthdayList.sort((a, b) => new Date(a.birthdayDate).getTime() - new Date(b.birthdayDate).getTime());


  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
      {sortedList.map((bday) => (
        <BirthdayCard key={bday.id} {...bday} />
      ))}
    </Grid>
  );
};

