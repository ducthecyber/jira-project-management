import { Layout } from 'antd';
import React from 'react';
import FormLogin from '../../modules/form-login/FormLogin';

const { Header, Footer, Sider, Content } = Layout;

const Login = () => {
    return (
        <div>
            <Layout>
                <Sider>
                    sider
                </Sider>
                <Content>
                    <FormLogin></FormLogin>
                </Content>
            </Layout>
        </div>
    )
}

export default Login;