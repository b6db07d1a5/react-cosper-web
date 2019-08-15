import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Page = ({ children }) => {
    return (<Layout className="layout" style={{ height: '100vh' }}>
        <Header style={{ backgroundColor: 'white' }} >
            <div className="logo" />
            <center>
                <Menu
                    theme="white"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Trends</Menu.Item>
                    <Menu.Item key="99"></Menu.Item>
                    <Menu.Item key="2">New</Menu.Item>
                    <Menu.Item key="99"></Menu.Item>
                    <Menu.Item key="3">Post</Menu.Item>
                </Menu>
            </center>
        </Header>
        <Content style={{ padding: '0 50px', borderTop: '1px solid #ddd' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>
                {children}
            </div>
        </Content>
    </Layout>);
}

export default Page;