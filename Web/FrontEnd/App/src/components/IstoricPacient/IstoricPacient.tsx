import { Button } from "antd";
import React from "react";
import { Doctori, Pacienti, Transporturi, Tratament } from "../../common/common";
import { DetaliiPacient } from "./DetaliiPacient";
import { IstoricTransporturi } from "./IstoricTransporturi";

export interface IstoricPacientProps{
    dataDoctori:Doctori;
    navigateToPacienti:()=>void;
    dataTransporturi:Transporturi[];
    dataPacient:Pacienti;
}

export const IstoricPacient=({dataDoctori,navigateToPacienti,dataTransporturi,dataPacient}:IstoricPacientProps)=>{
    return(<div>
       
        <div style={{display:"flex"}}>
        <h1 style={{marginTop:"20px",marginLeft:"100px",width:"500px"}}>{dataDoctori.nume+" "+dataDoctori.prenume}</h1>
        <Button size="large" style={{marginLeft:"1150px", marginTop:"30px"}} onClick={()=>{navigateToPacienti()}}>🡸 Inapoi</Button>
        </div>
        <div style={{display:"flex"}}>
        <DetaliiPacient dataPacient={dataPacient}></DetaliiPacient>
        <div style={{marginLeft:"300px", marginTop:"70px"}}><IstoricTransporturi data={dataTransporturi}></IstoricTransporturi></div>
        
        
        </div>
    </div>);
}