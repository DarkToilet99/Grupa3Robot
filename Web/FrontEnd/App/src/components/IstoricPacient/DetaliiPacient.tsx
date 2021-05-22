import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import React, { useState } from "react";
import { Pacienti, Tratament } from "../../common/common";

export interface DetaliiPacientProps{
    dataPacient:Pacienti;
    dataTratament:Tratament;
}


export const DetaliiPacient=({dataPacient,dataTratament}:DetaliiPacientProps)=>{
    let tratament_temporal:Tratament={medicament:"",diagnostic:"",pat:0,pacientId:0};
    const [k,setK]=useState(0);
    const [tratament,setTratament]=useState({medicament:"",diagnostic:"",pat:0,pacientId:0});
    
    if(k<3)
        {axios
        .get("https://localhost:44327/pacient",{params:{pacientId:dataPacient.pacientId}})
        .then(raspuns=>{
            //setTratament(raspuns.data)
            tratament_temporal=raspuns.data
            setTratament({diagnostic:tratament_temporal.diagnostic,medicament:tratament_temporal.medicament,pat:tratament_temporal.pat,pacientId:dataPacient.pacientId})
            setK(k+1);
        })
        .catch(e=>console.log(e))
        console.log(k)
    console.log(tratament)}
let sexPacient;
if(dataPacient.sex==true)
sexPacient="Masculin"
else
sexPacient="Feminin"
    return(
        <div style={{width:"400px", marginLeft:"100px", marginTop:"40px",justifyItems:"center"}}>
         <h2>Informatii Pacient</h2>
        <Input style={{marginBottom:"5px", marginTop:"10px"}} placeholder="CNP" value={dataPacient.pacientCNP} ></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Nume" value={dataPacient.nume} ></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Prenume" value={dataPacient.prenume}></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Varsta" value={dataPacient.varsta}></Input>
        <Input contentEditable="false" style={{marginBottom:"5px"}} placeholder="Sex" value={sexPacient}></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Telefon" value={dataPacient.telefon}></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Profesie" value={dataPacient.profesie}></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Pat" value={tratament.pat} ></Input>
        <TextArea style={{marginBottom:"5px"}} placeholder="Diagnostic" value={tratament.diagnostic}></TextArea>
        <TextArea style={{marginBottom:"5px"}} placeholder="Medicament" value={tratament.medicament}></TextArea>
        </div>
    );
}