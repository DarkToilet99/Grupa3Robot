import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';

export interface LoginProps {
  navigateToPacienti:()=>void;
  navigateToAutentificare:()=>void;
  navigateToRegister:()=>void;
  setInregMedic:(codParafa:any)=>void;
  setParolaInregistrare:(parola:any)=>void;
  getPacienti:()=>void;
}

export const NormalLoginForm = ({navigateToPacienti,navigateToAutentificare,navigateToRegister,setInregMedic,getPacienti,setParolaInregistrare}:LoginProps) => {

  

navigateToAutentificare();
  return (
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nume Utilizator" />
        
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
        <Input
        onBlur={(a)=>{setParolaInregistrare(a.currentTarget.defaultValue)}}
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          placeholder="Parola"
        />
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
        <Input
        onBlur={(a)=>{setInregMedic(a.currentTarget.defaultValue)}}
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          type="cod_parafa"
          placeholder="Cod Parafa"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary"  className="login-form-button" onClick={()=>{getPacienti();navigateToPacienti()}}>
          Autentificare
        </Button>
        <Button style={{marginLeft:"128px"}} onClick={()=>navigateToRegister()}>
            Inregistrare
        </Button>
      </Form.Item>
    </Form>
  );
};
