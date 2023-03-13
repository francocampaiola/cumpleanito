import { Grid } from "@chakra-ui/react";
import { BirthdayCard } from "../BirthdayCard";
import birthdays from "../../../constants/birthdays";

export const Birthdays = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const sortedBirthdays = birthdays
    .map((bday) => {
      const [day, month] = bday.birthday.split("/").map(Number);
      const birthdate = new Date(currentYear, month - 1, day);
      const ageInMs = today.getTime() - birthdate.getTime();
      const age = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365));
      if (birthdate < today) {
        birthdate.setFullYear(currentYear + 1);
      }
      return { ...bday, birthdate };
    })
    .sort((a, b) => a.birthdate.getTime() - b.birthdate.getTime());

  return (
    <Grid
      templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
      gap={5}
    >
      {sortedBirthdays.map((bday) => (
        <BirthdayCard key={bday.id} {...bday} />
      ))}
    </Grid>
  );
};

export default Birthdays;
