export interface Birthday {
    id: number;
    name: string;
    birthday: string;
    contact: string;
  }
  
  export const birthdays: Birthday[] = [
    {
      id: 1,
      name: "Franco Campaiola",
      birthday: "08/10/1997",
      contact: "5491136248796",
    },
    {
      id: 2,
      name: "Facundo Lo Dico",
      birthday: "19/09/1997",
      contact: "5491135888506",
    },
    {
      id: 3,
      name: "Ezequiel Jorge",
      birthday: "03/12/1998",
      contact: "5491168730312",
    },
    {
      id: 4,
      name: "Edson Molina",
      birthday: "29/04/1997",
      contact: "5491123721444",
    },
    {
      id: 5,
      name: "Julian Arnesino",
      birthday: "12/03/1997",
      contact: "5491159429338",
    },
    {
      id: 6,
      name: "Javier Castilla",
      birthday: "25/02/1997",
      contact: "5491130239530",
    },
    {
      id: 7,
      name: "Juan Ignacio Granero",
      birthday: "05/03/1997",
      contact: "5491140422498",
    },
    {
      id: 8,
      name: "Leonel Cabral",
      birthday: "03/04/1997",
      contact: "5491169283170",
    },
    {
      id: 9,
      name: "Jose Muñiz",
      birthday: "09/09/1993",
      contact: "5491130942905",
    },
    {
      id: 10,
      name: "Lucas Paiva",
      birthday: "26/05/1997",
      contact: "5491134644614",
    },
    {
      id: 11,
      name: "Santiago Peralta",
      birthday: "07/04/1997",
      contact: "5491134644614",
    },
    {
      id: 12,
      name: "Sebastián Mira",
      birthday: "30/09/1998",
      contact: "5491169276337",
    },
  ];
  
  const sortedBirthdays = birthdays.sort((a, b) => {
    const dateA = new Date(a.birthday.split("/").reverse().join("-"));
    const dateB = new Date(b.birthday.split("/").reverse().join("-"));
    return dateA.getTime() - dateB.getTime();
  });
  
  export default sortedBirthdays;
  