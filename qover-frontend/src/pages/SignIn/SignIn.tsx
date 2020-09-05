import React from 'react';
import styles from './SignIn.module.css';
import sharedStyles from '../../shared.module.css';
import Logo from './assets/logo.svg';
import { Form, Input, Button, Checkbox } from 'antd';

const SignIn: React.FC = () => (
  <div className={styles.SignIn}>
    <img src={Logo} alt="logo" className={styles.logo}></img>
    <div className={styles.form}>
      <h1 className={styles.title}>Welcome at Qover</h1>
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          noStyle
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <label htmlFor="email" className={sharedStyles.label}>
            Email
          </label>
          <Input />
        </Form.Item>

        <Form.Item
          noStyle
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <label htmlFor="password" className={sharedStyles.label}>
            Password
          </label>
          <Input.Password />
        </Form.Item>

        <Form.Item className={styles.formMeta}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className={styles.rememberMe}>Remember me</Checkbox>
          </Form.Item>
          <a className={styles.forgotPassword} href="https://www.qover.com">
            Forgot your password?
          </a>
        </Form.Item>

        <Form.Item className={styles.bottom}>
          <Button className={styles.submit} type="primary" htmlType="submit">
            Sign in to your account
          </Button>
        </Form.Item>
      </Form>
    </div>
    <Button className={styles.getAccess} type="primary" htmlType="submit">
      Don’t have an account? &nbsp;
      <span className={styles.askAccess}>Ask access</span>
    </Button>
  </div>
);

export default SignIn;
