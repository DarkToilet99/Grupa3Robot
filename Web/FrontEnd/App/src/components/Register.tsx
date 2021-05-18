import { Form, Input, Button, Popover } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Doctori } from '../common/common';
import { useEffect, useState } from 'react';
import axios from 'axios';
export interface RegisterProps {
    navigateToPacienti:()=>void;
  }


  export const RegisterForm = ({navigateToPacienti}:RegisterProps) => {
    const [query,setQuery]=useState<Doctori>({Nume:"",Prenume:"",CodParafa:0,Parola:0})


    const inregistrareMedic=()=>{
      axios
      .post<Doctori>("https://localhost:44327/medics",  
          {Nume:query.Nume,
           Prenume:query.Prenume,
          CodParafa:query.CodParafa,
        Parola:query.Parola}
         ,{
          headers: {
              "Content-Type": "application/json"
            }
      }
      )
      .then(raspuns=>{
              console.log(raspuns.data)})
      .catch(e=>console.log(e))
  }

   const [dateDoctor,setDateDoctor]=useState({Nume:"",Prenume:"",CodParafa:0,Parola:0})

   
return (
  <>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Introduceti numele de utilizator!',
          },
        ]}
      >
         <Popover trigger="click" content={<div>Dupa ce ati introdus datele apasati Enter!</div>}>
        <Input style={{marginBottom:"20px"}} onPressEnter={(numeMedic)=>{console.log(numeMedic.currentTarget.defaultValue);setQuery({...query,Nume: numeMedic.currentTarget.defaultValue})}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nume" />
         </Popover>
         
        <Popover trigger="click" content={<div>Dupa ce ati introdus datele apasati Enter!</div>}>
        <Input onPressEnter={(prenume)=>{setQuery({...query,Prenume: prenume.currentTarget.defaultValue})}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Prenume" />
          </Popover> 
     </Form.Item>
      
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Introduceti parola!',
          },
        ]}
      >
          <Popover trigger="click" content={<div>Dupa ce ati introdus datele apasati Enter!</div>}>
            <Input
        onPressEnter={(parola)=>{setQuery({...query,Parola: Number(parola.currentTarget.defaultValue)})}}
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          placeholder="Parola"
        /></Popover>
       
      </Form.Item>
      <Form.Item
        name="cod_parafa"
        rules={[
          {
            required: true,
            message: 'Introduceti codul parafa!',
          },
        ]}
      >
        <Popover trigger="click" content={<div>Dupa ce ati introdus datele apasati Enter!</div>}>
        <Input
        onPressEnter={(parafa)=>{setQuery({...query,CodParafa: Number(parafa.currentTarget.defaultValue)});
        console.log(Number(parafa.currentTarget.defaultValue));}}
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          type="cod_parafa"
          placeholder="Cod Parafa"
        />
        </Popover>
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={{marginLeft:"130px"}} onClick={()=>{
          setTimeout(() =>setDateDoctor(query), 1000)
          console.log(query);
          inregistrareMedic();
          navigateToPacienti()}}>Inregistreaza-te</Button>
            
      </Form.Item>
    </Form>
    </>
  );
  };