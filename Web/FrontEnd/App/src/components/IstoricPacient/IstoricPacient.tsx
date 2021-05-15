import { Button } from "antd";
import React from "react";
import { Doctori, Transporturi } from "../../common/common";
import { DetaliiPacient } from "./DetaliiPacient";
import { IstoricTransporturi } from "./IstoricTransporturi";

export interface IstoricPacientProps{
    dataDoctori:Doctori[];
    navigateToPacienti:()=>void;
    dataTransporturi:Transporturi[];
}

export const IstoricPacient=({dataDoctori,navigateToPacienti,dataTransporturi}:IstoricPacientProps)=>{
    return(<div>
        <div style={{display:"flex"}}>
        <h1 style={{marginTop:"20px", marginLeft:"100px"}}>{dataDoctori[0].numeDoctor}</h1>
        <Button size="large" style={{marginLeft:"1250px", marginTop:"30px"}} onClick={()=>{navigateToPacienti()}}>🡸 Inapoi</Button>
        </div>
        <div style={{display:"flex"}}>
        <DetaliiPacient></DetaliiPacient>
        <div style={{marginLeft:"300px", marginTop:"70px"}}><IstoricTransporturi data={dataTransporturi}></IstoricTransporturi></div>
        
        
        </div>
    </div>);
}