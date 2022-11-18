import { LockOutlined, UserOutlined, FacebookFilled, TwitterCircleFilled, InstagramOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormLogin = () => {
  const onFinish = () => {
  };

  return (
    <Fragment>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button mr-3"
            style={{ width: '100%', height: '2.75rem', fontSize: '1.25rem' }}
          >
            Log in
          </Button>
          <div className='social mt-4 mb-4 flex-row' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5%', flexWrap: 'wrap', gap: '1rem' }}>
            <Button type="primary" size={"large"} icon={<FacebookFilled />} shape='circle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} href='https://cybersoft.edu.vn/'>
            </Button>
            <Button type="primary" size={"large"} icon={<TwitterCircleFilled />} style={{ backgroundColor: "cornflowerblue", border: 'none',display: 'flex', alignItems: 'center', justifyContent: 'center' }} shape='circle'  href='https://cybersoft.edu.vn/'>
            </Button>
            <Button type="primary" size={"large"} icon={<InstagramOutlined />} style={{ backgroundColor: "#ff342e", border: 'none',display: 'flex', alignItems: 'center', justifyContent: 'center' }} shape='circle' href='https://cybersoft.edu.vn/'>
            </Button>
          </div>
          <div className='register' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div>
              <span className='mr-3' style={{fontSize:'1rem'}}>Don't have an account ?</span>
              <Link to='' style={{fontSize:'1rem'}}>Register Now !</Link>
            </div>
          </div>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default FormLogin;

