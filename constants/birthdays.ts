export interface Birthday {
    id: number;
    name: string;
    birthday: string;
    contact: string;
}

// Path: constants/birthdays.ts

export const birthdays: Birthday[] = [
    {
        id: 1,
        name: 'Franco Campaiola',
        birthday: '08/10/1997',
        contact: '5491136248796'
    },
    {
        id: 2,
        name: 'Juan Perez',
        birthday: '13/03/1997',
        contact: '5491136248796'
    },
    {
        id: 3,
        name: 'Maria Lopez',
        birthday: '13/03/1997',
        contact: '5491136248796'
    },
    {
        id: 4,
        name: 'Pedro Sanchez',
        birthday: '13/08/1997',
        contact: '5491136248796'
    },
];
