import React, { Component } from 'react'
import { Layout, List } from 'antd'
import Page from '@components/Page'
import HashJam from '@components/hash/HashJam'
import HashList from '@components/hash/HashList'

const { Header, Content, Sider } = Layout;


const data = [
    '#Racing car.',
    '#Japanese.',
    '#100km after.',
    '#Man charged.',
    '#Los Angeles.',
];

class Hash extends Component {
    state = {}

    render() {
        return (
            <Page>
                <Layout style={{ padding: '0 250px', borderTop: '1px solid #ddd' }}>
                    <Content style={{ padding: '0 20px' }}>
                        <div style={{ background: '#fff', padding: 24 }}>
                            <HashJam />
                            <HashList />
                        </div>
                    </Content>
                    <Sider style={{ marginTop: '20px', backgroundColor: '#f0f2f5' }}>
                        <h3>Hash Trends</h3>
                        <List
                            size="small"
                            footer={<div>Footer</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Sider>
                </Layout>
            </Page>
        );
    }
}

export default Hash;