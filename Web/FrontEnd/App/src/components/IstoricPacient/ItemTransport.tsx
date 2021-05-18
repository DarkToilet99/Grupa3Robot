
import React from "react";
import { Transporturi } from "../../common/common";

export interface ItemTransportProps{
    item:Transporturi;
}

export const ItemTransport=({item}:ItemTransportProps)=>{
    return(
        <div style={{padding:"15px", borderBottom:"1px solid LightGrey"}}>
            <div  style={{display:"flex", alignItems:"flex-start",justifyContent:"left"}}>
            <text style={{ marginLeft:"30px", position:"absolute"}} >Data Transport:{item.Data}</text>
          </div>   
            <div style={{marginLeft:"350px",display:"flex",alignItems:"right",justifyContent:"right"}}>

            <text>Efectuat:{item.Efectuat}</text> 
            </div>
        </div>
    );
}