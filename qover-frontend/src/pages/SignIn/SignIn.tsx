import React, { useState } from 'react';
import styles from './SignIn.module.css';
import Logo from './assets/logo.svg';
import { Form, Input, Checkbox, Alert, notification } from 'antd';
import { storeToken } from '../../jwtMemory';
import { useHistory } from 'react-router-dom';
import { login } from '../../api';
import {
  UnauthorizedException,
  UNAUTHORIZED,
  GENERAL_ERROR_MESSAGE,
} from '../../exceptions';
import { PATH_CAR } from '../../App';
import Label from '../../components/Label/Label';

type formData = {
  email: string;
  password: string;
  remember: boolean;
};

const SignIn: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticationFailed, setIsAuthenticationFailed] = useState(false);

  const history = useHistory();

  const onFinish = async (values: formData) => {
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const { email, password } = values;
      const response = await login({ username: email, password });

      setIsSubmitting(false);

      if (!response.ok) {
        if (response.status === UNAUTHORIZED) {
          throw new UnauthorizedException(response.statusText);
        }
        throw new Error(response.statusText);
      }

      const data = await response.json();
      storeToken(data.access_token);
      history.push(PATH_CAR);
    } catch (e) {
      if (e instanceof UnauthorizedException) {
        setIsAuthenticationFailed(true);
      } else {
        notification['error']({
          message: GENERAL_ERROR_MESSAGE,
        });
      }
    }
  };

  const onFieldsChange = () => {
    setIsAuthenticationFailed(false);
  };

  return (
    <div className={styles.SignIn}>
      <img src={Logo} alt="logo" className={styles.logo}></img>
      <div className={styles.form}>
        <h1 className={styles.title}>Welcome at Qover</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFieldsChange={onFieldsChange}
        >
          <Label htmlFor="basic_email" title="email">
            Email
          </Label>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input autoComplete="username" />
          </Form.Item>

          <Label htmlFor="password" title="password">
            Password
          </Label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password autoComplete="current-password" />
          </Form.Item>

          <Form.Item className={styles.formMeta}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className={styles.rememberMe}>Remember me</Checkbox>
            </Form.Item>
            <a className={styles.forgotPassword} href="https://www.qover.com">
              Forgot your password?
            </a>
          </Form.Item>

          {isAuthenticationFailed && (
            <Alert
              className={styles.unknownUser}
              message="Wrong Username Or Password"
              type="error"
            />
          )}

          <Form.Item className={styles.bottom}>
            <button className={styles.submit}>Sign in to your account</button>
          </Form.Item>
        </Form>
      </div>
      <button disabled={isSubmitting} className={styles.getAccess}>
        Don’t have an account? &nbsp;
        <span className={styles.askAccess}>Ask access</span>
      </button>
    </div>
  );
};
export default SignIn;
