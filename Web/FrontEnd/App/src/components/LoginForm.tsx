import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export interface LoginProps {
  navigateToPacienti:()=>void;
  navigateToAutentificare:()=>void;
}

export const NormalLoginForm = ({navigateToPacienti,navigateToAutentificare}:LoginProps) => {
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
        <Button type="primary"  className="login-form-button" onClick={()=>navigateToPacienti()}>
          Log in
        </Button>
        <Button style={{marginLeft:"128px"}}>
            Register
        </Button>
      </Form.Item>
    </Form>
  );
};
