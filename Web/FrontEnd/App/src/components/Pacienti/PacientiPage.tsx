import { Button } from "antd"
import Search from "antd/lib/input/Search";
import React, { useState } from "react";
import { Doctori, Pacienti } from "../../common/common";
import { AdaugarePacient } from "./AdaugarePacient";
import { ListaPacienti } from "./ListaPacienti";

export interface PacientiProps{
    setSearchCriteria:(text:any)=>void;
    data:Pacienti[];
    navigateToAutentificare:()=>void;
    dataDoctori:Doctori[];
    navigateToIstoricPacienti:()=>void;
}

export const PacientiPage=({setSearchCriteria,data,navigateToAutentificare, navigateToIstoricPacienti,dataDoctori}:PacientiProps)=>{
    const [isAddModalVisible,setIsAddModalVisible]=useState(false);

    return(
        <>
        <div style={{display:"flex"}}>
        <h1 style={{marginTop:"20px", marginLeft:"100px"}}>{dataDoctori[0].numeDoctor}</h1>
        <Button size="large" style={{marginLeft:"1250px", marginTop:"30px"}} onClick={()=>{navigateToAutentificare()}}>Deconectare</Button>
        </div>
        <div style={{ display:"flex",marginLeft:"720px", marginTop:"120px", textDecorationLine:"underline" }}>
        <h1>Lista Pacienti</h1>
            <Button style={{marginLeft:"200px", marginTop:"8px"}} onClick={()=>{setIsAddModalVisible(true)}}>Adaugare Pacient</Button>
        </div>
        

        <Search  style={{marginLeft:"400px", width:"897px"}} placeholder={"Cauta pacientul dupa nume"} onChange={()=>(setSearchCriteria(""))} onSearch={(text)=>{setSearchCriteria(text)}}></Search>

        <div style={{marginLeft:"400px", maxWidth:"895px"}}><ListaPacienti navigateToIstoricPacienti={navigateToIstoricPacienti} data={data}></ListaPacienti></div>
        
        <AdaugarePacient setIsModalVisible={setIsAddModalVisible} isModalVisible={isAddModalVisible} ></AdaugarePacient>
        </>
    );
}