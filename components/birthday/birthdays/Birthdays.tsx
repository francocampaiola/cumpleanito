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
      if (birthdate < today) {
        birthdate.setFullYear(currentYear + 1);
      }
      return { ...bday, birthdate };
    })
    .sort((a, b) => a.birthdate.getTime() - b.birthdate.getTime());

  // Filtra los cumpleaños que ocurren hoy y agregalos al principio de la lista
  const todayBirthdays = sortedBirthdays.filter((bday) => {
    const birthdate = bday.birthdate;
    return (
      birthdate.getDate() === today.getDate() &&
      birthdate.getMonth() === today.getMonth()
    );
  });
  const otherBirthdays = sortedBirthdays.filter((bday) => !todayBirthdays.includes(bday));
  const sortedAndFilteredBirthdays = [...todayBirthdays, ...otherBirthdays];

  return (
    <Grid
      templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
      gap={5}
    >
      {sortedAndFilteredBirthdays.map((bday) => (
        <BirthdayCard key={bday.id} {...bday} />
      ))}
    </Grid>
  );
};

export default Birthdays;
