import { Button } from "antd"
import React, { useState } from "react";
import { Pacienti } from "../../common/common";
import { ModalStergerePacient } from "./StergerePacient";

export interface ItemListProps{
    itemPacient:Pacienti;
    navigateToIstoricPacienti:()=>void;
    setDetaliiPacient:(detalii:Pacienti)=>void;
}

export const ItemPacient =({itemPacient,navigateToIstoricPacienti,setDetaliiPacient}:ItemListProps)=>{
const [isModalVisible,setIsModalVisible]=useState(false)
setDetaliiPacient(itemPacient)
    
    return (
        <div style={{borderBottom:"1px solid LightGray",borderLeft:"1px solid LightGray",borderRight:"1px solid LightGray", padding:"2px"}}>
        <div  style={{display:"flex", alignItems:"flex-start",justifyContent:"left", position:"absolute"}}>
            <text style={{ marginLeft:"30px"}} >{itemPacient.nume+" "+itemPacient.prenume}</text>
          </div>   
            <div style={{marginLeft:"350px",display:"flex",alignItems:"center",justifyContent:"center", position:"absolute"}}>

            <text style={{marginLeft:"0px"}}>Varsta:{itemPacient.varsta}</text>
            </div>
            <div style={{display:"flex", alignItems:"end", justifyContent:"space-between"}}>
            <Button style={{marginLeft:"670px"}} onClick={()=>{navigateToIstoricPacienti()}} >Vizualizare</Button>
            <Button onClick={()=>{setIsModalVisible(true)}}>Eliminare</Button>
            <ModalStergerePacient setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}></ModalStergerePacient>
            </div>
        </div>

       
    )
}

