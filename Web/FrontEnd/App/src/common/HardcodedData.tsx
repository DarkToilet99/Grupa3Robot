import { Doctori, Pacienti, StareRobot, Transporturi } from "./common";

export const mockedData:Pacienti[] =[
// {
//     nume:"Oltean",
//     pacientCNP:194839529435,
//     prenume:"Emanuel",
//     varsta:86,
//     telefon:769738009,
//     email:"exemplu.email@yahoo.com",
//     profesie:"instalator",
//     locDeMunca:"Continental",
//     sex:false
// },
// {
//     nume:"Popescu",
//     pacientCNP:194839529435,
//     prenume:"Andrei",
//     varsta:86,
//     telefon:769738009,
//     email:"exemplu.email@yahoo.com",
//     profesie:"instalator",
//     locDeMunca:"Continental",
//     sex:false
// }
]
export const mockedDoctori:Doctori[] =[
    {nume:"Piscot",
    prenume:"Iscot",
    parola:"565",
    codParafa:1111}
]

export const mockedTransport:Transporturi[]=[
    {data:"12 mai 2021",
    efectuat:true},
    {data:"14 mai 2021",
    efectuat:true},
    {data:"13 mai 2021",
    efectuat:true},
    {data:"13 mai 2021",
    efectuat:true},
    {data:"13 mai 2021",
    efectuat:true}
]
export const stareRobotMocked:StareRobot[]=[
    {
        ocupat:"Online"
    }
]