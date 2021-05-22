import { Input, Modal} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { Pacienti, Tratament } from '../../common/common';

export interface ModalAdaugarePacientProps
{
    setIsModalVisible:(isModalVisible:boolean)=>void;
    isModalVisible:boolean;
    bearerToken:string;
    inregMedic:number;
    detaliiPacienti:Pacienti;
    getPacienti:()=>void;
}

export const AdaugarePacient = ({isModalVisible,setIsModalVisible,bearerToken, inregMedic,detaliiPacienti,getPacienti}:ModalAdaugarePacientProps) => {



 
let detalii={nume:"",prenume:"",pacientCNP:0,varsta:0,sex:true,telefon:0,profesie:"",locDeMunca:"0",email:"",tratamente:{pacientId:0,diagnostic:"",pat:0,medicament:""}};
const adaugarePacient=()=>{
    axios
    .post("https://localhost:44327/pacients",  
        {MedicId:Number(inregMedic),
        Nume:detalii.nume,
        Prenume:detalii.prenume,
        PacientCNP:detalii.pacientCNP,
        Varsta:detalii.varsta,
        Telefon:detalii.telefon,
        Email:detalii.email,
        Profesie:detalii.profesie,
        LocDeMunca:detalii.locDeMunca,
        Sex:detalii.sex}
       ,{
        headers: {
            "Content-Type": "application/json",
            
            // 'Authorization': 'Bearer ' + bearerToken
        
          }
    }
    )
    .then(raspuns=>{
      axios
      .post<Tratament>("https://localhost:44327/pacient",
      {
        PacientId:detaliiPacienti.pacientId,
        PacientCNP:detalii.pacientCNP,
        Medicament:detalii.tratamente.medicament,
        Pat:detalii.tratamente.pat,
        Diagnostic:detalii.tratamente.diagnostic
      },
      {
        headers: {
          "Content-Type": "application/json",
          
          // 'Authorization': 'Bearer ' + bearerToken
      
        }
      })
      .then(a=>getPacienti())
    })
    .catch(e=>console.log(e))

}


  const handleOk = () => {
    console.log("detalii pacienti ",detalii)
    adaugarePacient()
    setIsModalVisible(false);

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Adaugare Pacient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Adauga" cancelText="Inapoi" >
        <Input onBlur={(a)=>{detalii.pacientCNP=Number(a.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="CNP"></Input>
        <Input onBlur={(b)=>{detalii.nume=b.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Nume"></Input>
        <Input onBlur={(c)=>{detalii.prenume=c.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Prenume"></Input>
        <Input onBlur={(d)=>{detalii.varsta=Number(d.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Varsta"></Input>
        <Input onBlur={(e)=>{detalii.sex=Boolean(e.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Sex"></Input>
        <Input onBlur={(f)=>{detalii.telefon=Number(f.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Telefon"></Input>
        <Input onBlur={(g)=>{detalii.profesie=g.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Profesie"></Input>
        <Input onBlur={(f)=>{detalii.locDeMunca=f.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Loc De Munca"></Input>
        <Input onBlur={(g)=>{detalii.email=g.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Email"></Input>
        <Input onBlur={(g)=>{detalii.tratamente.pat=Number(g.currentTarget.defaultValue)}} style={{marginBottom:"5px"}} placeholder="Pat"></Input>
        <TextArea onBlur={(g)=>{detalii.tratamente.diagnostic=g.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Diagnostic"></TextArea>
        <TextArea onBlur={(g)=>{detalii.tratamente.medicament=g.currentTarget.defaultValue.toString()}} style={{marginBottom:"5px"}} placeholder="Medicament"></TextArea>
      </Modal>
    </>
  );
};
