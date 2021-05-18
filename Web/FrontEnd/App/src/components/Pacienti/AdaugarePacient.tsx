import { Input, Modal} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { useState } from 'react';
import { Pacienti } from '../../common/common';

export interface ModalAdaugarePacientProps
{
    setIsModalVisible:(isModalVisible:boolean)=>void;
    isModalVisible:boolean;
    bearerToken:string;
}

export const AdaugarePacient = ({isModalVisible,setIsModalVisible,bearerToken}:ModalAdaugarePacientProps) => {



  const [detaliiPacient,setDetaliiPacient]=useState<Pacienti>({Nume:"",Prenume:"",PacientCNP:0,Varsta:0,Sex:true,Telefon:0,Profesie:"",LocDeMunca:"0",Email:""})
let detalii={Nume:"",Prenume:"",PacientCNP:0,Varsta:0,Sex:true,Telefon:0,Profesie:"",LocDeMunca:"0",Email:""};
const adaugarePacient=()=>{
    axios
    .post<Pacienti>("https://localhost:44327/pacients",  
        {detaliiPacient}
       ,{
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + bearerToken
        
          }
    }
    )
    .then(raspuns=>{
            console.log(raspuns.data)})
    .catch(e=>console.log(e))

}
  const handleOk = () => {
    console.log(detalii)
    adaugarePacient()
    setIsModalVisible(false);
    setDetaliiPacient(detalii);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Adaugare Pacient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Adauga" cancelText="Inapoi" >
        <Input onPressEnter={(a)=>{detalii.PacientCNP=Number(a.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="CNP"></Input>
        <Input onPressEnter={(b)=>{detalii.Nume=b.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Nume"></Input>
        <Input onPressEnter={(c)=>{detalii.Prenume=c.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Prenume"></Input>
        <Input onPressEnter={(d)=>{detalii.Varsta=Number(d.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Varsta"></Input>
        <Input onPressEnter={(e)=>{detalii.Sex=Boolean(e.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Sex"></Input>
        <Input onPressEnter={(f)=>{detalii.Telefon=Number(f.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Telefon"></Input>
        <Input onPressEnter={(g)=>{detalii.Profesie=g.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Profesie"></Input>
        <Input onPressEnter={(f)=>{detalii.LocDeMunca=f.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Loc De Munca"></Input>
        <Input onPressEnter={(g)=>{detalii.Email=g.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Email"></Input>
        <TextArea style={{marginBottom:"5px"}} placeholder="Diagnostic"></TextArea>
        <TextArea style={{marginBottom:"5px"}} placeholder="Medicament"></TextArea>
      </Modal>
    </>
  );
};
