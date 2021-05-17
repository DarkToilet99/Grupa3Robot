import { Button } from "antd"
import React, { useState } from "react";
import { ModalStergerePacient } from "./StergerePacient";

export interface ItemListProps{
    item:{PacientCNP:number;
        Nume:string;
        Prenume:string;
        Varsta:number;
        Telefon:number;
        Email:string;
        Profesie:string;
        LocDeMunca:string;
        Sex:boolean;};
    navigateToIstoricPacienti:()=>void;
}

export const ItemPacient =({item,navigateToIstoricPacienti}:ItemListProps)=>{
const [isModalVisible,setIsModalVisible]=useState(false)
    
    return (
        <div style={{borderBottom:"1px solid LightGray",borderLeft:"1px solid LightGray",borderRight:"1px solid LightGray", padding:"2px"}}>
        <div  style={{display:"flex", alignItems:"flex-start",justifyContent:"left", position:"absolute"}}>
            <text style={{ marginLeft:"30px"}} >{item.Nume}</text>
          </div>   
            <div style={{marginLeft:"350px",display:"flex",alignItems:"center",justifyContent:"center", position:"absolute"}}>

            {/* <text style={{marginLeft:"0px"}}>{item.sectiePacient}</text> */}
            </div>
            <div style={{display:"flex", alignItems:"end", justifyContent:"space-between"}}>
            <Button style={{marginLeft:"670px"}} onClick={()=>{navigateToIstoricPacienti()
            console.log("am intrat")}} >Vizualizare</Button>
            <Button onClick={()=>{setIsModalVisible(true)}}>Eliminare</Button>
            <ModalStergerePacient setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}></ModalStergerePacient>
            </div>
        </div>

       
    )
}

