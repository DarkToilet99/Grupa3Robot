import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export interface RegisterProps {
    navigateToPacienti:()=>void;
    
    navigateToRegister:()=>void;
  }

  export const RegisterForm = ({navigateToPacienti,navigateToRegister}:RegisterProps) => {
    const onFinish = (values:any) => {
      console.log('Received values of form: ', values);
    };
navigateToRegister();
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
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          type="password"
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
        prefix={<LockOutlined className="site-form-item-icon" />}
            size="middle"
          type="cod_parafa"
          placeholder="Cod Parafa"
        />
      </Form.Item>

      <Form.Item>
        <Button style={{marginLeft:"128px"}} onClick={()=>navigateToPacienti()}>
            Register
        </Button>
      </Form.Item>
    </Form>
  );
  };