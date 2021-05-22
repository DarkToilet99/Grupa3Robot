import { Form, Input, Button, Popover } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Doctori } from '../common/common';
import { useEffect, useState } from 'react';
import axios from 'axios';
export interface RegisterProps {
    navigateToPacienti:()=>void;
  }


  export const RegisterForm = ({navigateToPacienti}:RegisterProps) => {
    const [query,setQuery]=useState<Doctori>({nume:"",prenume:"",codParafa:0,parola:""})


    const inregistrareMedic=()=>{
      axios
      .post<Doctori>("https://localhost:44327/medics",  
          {Nume:query.nume,
           Prenume:query.prenume,
          CodParafa:query.codParafa,
        Parola:query.parola}
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

   const [dateDoctor,setDateDoctor]=useState({nume:"",prenume:"",codParafa:0,parola:""})

   
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
        <Input style={{marginBottom:"20px"}} onPressEnter={(numeMedic)=>{setQuery({...query,nume: numeMedic.currentTarget.defaultValue})}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nume" />
         </Popover>
         
        <Popover trigger="click" content={<div>Dupa ce ati introdus datele apasati Enter!</div>}>
        <Input  onBlur={(prenume)=>{setQuery({...query,prenume: prenume.currentTarget.defaultValue})}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Prenume" />
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
        onPressEnter={(parola)=>{setQuery({...query,parola:parola.currentTarget.defaultValue})}}
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
        onBlur={(parafa)=>{setQuery({...query,codParafa: Number(parafa.currentTarget.defaultValue)});
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
          inregistrareMedic();
          navigateToPacienti()}}>Inregistreaza-te</Button>
            
      </Form.Item>
    </Form>
    </>
  );
  };