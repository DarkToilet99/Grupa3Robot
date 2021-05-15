import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

export const DetaliiPacient=()=>{

    return(
        <div style={{width:"400px", marginLeft:"100px", marginTop:"40px",justifyItems:"center"}}>
         <h2>Informatii Pacient</h2>
        <Input style={{marginBottom:"5px", marginTop:"10px"}} placeholder="CNP"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Nume"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Prenume"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Varsta"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Sex"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Telefon"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Profesie"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Pat"></Input>
        <TextArea style={{marginBottom:"5px"}} placeholder="Diagnostic"></TextArea>
        <TextArea style={{marginBottom:"5px"}} placeholder="Medicament"></TextArea>
        </div>
    );
}