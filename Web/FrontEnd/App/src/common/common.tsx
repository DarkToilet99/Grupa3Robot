export interface Pacienti {
    PacientCNP:number;
    Nume:string;
    Prenume:string;
    Varsta:number;
    Telefon:number;
    Email:string;
    Profesie:string;
    LocDeMunca:string;
    Sex:boolean;
}

export interface Doctori {
    Nume:string;
    Prenume:string;
    CodParafa:number;
    Parola:number;

}
export interface Transporturi{
    Data:string;
    Efectuat:boolean;
}
export interface StareRobot{
    Ocupat:string;
}

export interface Asistenta {
    Nume:string;
    Prenume:string;
    Parola:number;
    NumeUtilizator:string;
}

export interface Tratament {
    PacientCNP:number;
    Medicament:string;
    Pat:number;
    Diagnostic:string;
}