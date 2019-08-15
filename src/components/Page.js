import React from 'react'

import styled from 'styled-components';

import { Layout, Menu, List } from 'antd';

const { Header, Content, Sider } = Layout;

const Page = ({ children }) => {
    return (<Layout className="layout" style={{ height: '100vh' }}>
        <Header style={{ backgroundColor: 'white' }} >
            <div className="logo" />
            <center>
                <Menu
                    theme="white"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Trends</Menu.Item>
                    <Menu.Item key="99"></Menu.Item>
                    <Menu.Item key="2">Hot</Menu.Item>
                    <Menu.Item key="99"></Menu.Item>
                    <Menu.Item key="3">New</Menu.Item>
                    <Menu.Item key="99"></Menu.Item>
                    <Menu.Item key="4">#jam</Menu.Item>
                </Menu>
            </center>
        </Header>
        {children}
    </Layout>);
}


export default Page;