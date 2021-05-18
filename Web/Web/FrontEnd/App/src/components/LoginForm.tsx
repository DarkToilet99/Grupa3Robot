import { Form, Input, Button, Popover } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';

export interface LoginProps {
  navigateToPacienti:()=>void;
  navigateToAutentificare:()=>void;
  navigateToRegister:()=>void;
  setInregMedic:(codParafa:string)=>void;
}

export const NormalLoginForm = ({navigateToPacienti,navigateToAutentificare,navigateToRegister,setInregMedic}:LoginProps) => {
  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);
  };
navigateToAutentificare();
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nume Utilizator" />
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
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          type="password"
          placeholder="Parola"
        />
        </Popover>
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
        onPressEnter={(a)=>{console.log(a.currentTarget.defaultValue);setInregMedic(a.currentTarget.defaultValue)}}
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          type="cod_parafa"
          placeholder="Cod Parafa"
        />
        </Popover>
      </Form.Item>

      <Form.Item>
        <Button type="primary"  className="login-form-button" onClick={()=>navigateToPacienti()}>
          Autentificare
        </Button>
        <Button style={{marginLeft:"128px"}} onClick={()=>navigateToRegister()}>
            Inregistrare
        </Button>
      </Form.Item>
    </Form>
  );
};
