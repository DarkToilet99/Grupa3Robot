import { Button } from "antd"
import Search from "antd/lib/input/Search";
import React, { useState } from "react";
import { Doctori, Pacienti, StareRobot } from "../../common/common";
import { stareRobotMocked } from "../../common/HardcodedData";
import { AdaugarePacient } from "./AdaugarePacient";
import { ListaPacienti } from "./ListaPacienti";

export interface PacientiProps{
    setSearchCriteria:(text:any)=>void;
    data:Pacienti[];
    navigateToAutentificare:()=>void;
    dataDoctori:Doctori[];
    navigateToIstoricPacienti:()=>void;
    stareRobot:string;
}

export const PacientiPage=({setSearchCriteria,data,navigateToAutentificare, navigateToIstoricPacienti,dataDoctori,stareRobot}:PacientiProps)=>{
    const [isAddModalVisible,setIsAddModalVisible]=useState(false);

    return(
        <>
        <div style={{display:"flex", marginLeft:"100px"}}>
        <h1 style={{marginTop:"20px", marginLeft:"100px"}}>{dataDoctori[0].numeDoctor}</h1>
        <Button size="large" style={{marginLeft:"1450px", marginTop:"30px"}} onClick={()=>{navigateToAutentificare()}}>Deconectare</Button>
        </div>
        <div style={{ display:"flex",marginLeft:"820px", marginTop:"120px", textDecorationLine:"underline" }}>
        <h1>Lista Pacienti</h1>
            <Button style={{marginLeft:"200px", marginTop:"8px"}} onClick={()=>{setIsAddModalVisible(true)}}>Adaugare Pacient</Button>
        </div>
        

        <Search  style={{marginLeft:"500px", width:"897px"}} placeholder={"Cauta pacientul dupa nume"} onChange={()=>(setSearchCriteria(""))} onSearch={(text)=>{setSearchCriteria(text)}}></Search>

        <div style={{marginLeft:"500px", maxWidth:"895px"}}><ListaPacienti navigateToIstoricPacienti={navigateToIstoricPacienti} data={data}></ListaPacienti></div>
        
        <AdaugarePacient setIsModalVisible={setIsAddModalVisible} isModalVisible={isAddModalVisible} ></AdaugarePacient>
        <div style={{display:"flex"}}>
        <div style={{display:"flex",marginTop:"40px"}}>
        <h1 style={{marginLeft:"140px"}}>Alarme:</h1>
        <h1 style={{marginLeft:"20px", border:"1px solid black"}} >-{stareRobotMocked[0].alarma}-</h1></div>
        <div style={{display:"flex", marginTop:"40px"}}>
        <h1 style={{marginLeft:"840px"}}>Stare Robot:</h1>
        <h1 style={{marginLeft:"20px", border:"1px solid black"}}>-{stareRobot}-</h1></div>
        </div>
        </>
    );
}