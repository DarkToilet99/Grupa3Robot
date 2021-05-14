import { Button } from "antd"
import Search from "antd/lib/input/Search";
import React from "react";
import { ListaPacienti } from "./ListaPacienti";

export const Pacienti=()=>{
    return(
        <>
        <div style={{display:"flex"}}>
        <h1 style={{marginTop:"20px", marginLeft:"100px"}}>Nume Doctor</h1>
        <Button size="large" style={{marginLeft:"1250px", marginTop:"30px"}}>Deconectare</Button>
        </div>
        <h1 style={{marginLeft:"720px", marginTop:"120px", textDecorationLine:"underline" }}>Lista Pacienti</h1>
        <Search  style={{marginLeft:"400px", width:"897px"}} placeholder={"Cauta pacientul dupa nume"}></Search>
        <div style={{marginLeft:"400px", maxWidth:"895px"}}><ListaPacienti></ListaPacienti></div>
        
        </>
    );
}