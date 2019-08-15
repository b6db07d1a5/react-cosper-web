import React from 'react'

import styled from 'styled-components';

import { Layout, Menu, List } from 'antd';

const { Header, Content, Sider } = Layout;

const data = [
    '#Racing car.',
    '#Japanese.',
    '#100km after.',
    '#Man charged.',
    '#Los Angeles.',
];

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
        <Layout style={{ padding: '0 250px', borderTop: '1px solid #ddd' }}>
            <Content style={{ padding: '0 20px' }}>
                <div style={{ background: '#fff', padding: 24 }}>
                    {children}
                </div>
            </Content>
            <Sider style={{ marginTop: '20px', backgroundColor: '#f0f2f5' }}>
                <h3>Hash Trends</h3>
                <StyledList
                    size="small"
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Sider>
        </Layout>
    </Layout>);
}

const StyledList = styled(List)`

`

export default Page;