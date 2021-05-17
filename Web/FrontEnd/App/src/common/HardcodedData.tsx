import { Doctori, Pacienti, StareRobot, Transporturi } from "./common";

export const mockedData:Pacienti[] =[
{
    Nume:"Oltean",
    PacientCNP:194839529435,
    Prenume:"Emanuel",
    Varsta:86,
    Telefon:769738009,
    Email:"exemplu.email@yahoo.com",
    Profesie:"instalator",
    LocDeMunca:"Continental",
    Sex:false
},
{
    Nume:"Popescu",
    PacientCNP:194839529435,
    Prenume:"Andrei",
    Varsta:86,
    Telefon:769738009,
    Email:"exemplu.email@yahoo.com",
    Profesie:"instalator",
    LocDeMunca:"Continental",
    Sex:false
}
]
export const mockedDoctori:Doctori[] =[
    {Nume:"Piscot",
    Prenume:"Iscot",
    Parola:3565,
    CodParafa:1111}
]

export const mockedTransport:Transporturi[]=[
    {Data:"12 mai 2021",
    Efectuat:true},
    {Data:"14 mai 2021",
    Efectuat:true},
    {Data:"13 mai 2021",
    Efectuat:true},
    {Data:"13 mai 2021",
    Efectuat:true},
    {Data:"13 mai 2021",
    Efectuat:true}
]
export const stareRobotMocked:StareRobot[]=[
    {
        Ocupat:"Online"
    }
]