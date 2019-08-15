import React from 'react'

import styled from 'styled-components';

import { List, Avatar, Icon, Button } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, .',
        content:
            'We supply a series of design principles, practical patterns and high quality design.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const HashList = () => {
    return (<StyledList
        itemLayout="vertical"
        size="large"
        bordered
        dataSource={listData}
        footer={
            <div>
                <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                    <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                    <IconText type="message" text="2" key="list-vertical-message" />,
                    <IconText type="share-alt" text="50" key="list-vertical-share-alt" />,
                    <IconText type="download" text="Save" key="list-vertical-download" />,
                ]}
            >
                <div style={{ marginBottom: 20, fontSize: 13 }}>
                    <b>#TheUntamed</b> - Posted by : sabparod 12 hours ago.{" "}
                    <Icon type="fire" theme="filled" style={{ color: '#e69325' }} />17{" "}
                    <Icon type="thunderbolt" theme="filled" style={{ color: '#ffe200' }} />50
                </div>
                <div align="right">
                    <Button icon="number" type="primary"> <b>jam</b> </Button>
                </div>
                <center>
                    <img
                        width={272}
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                </center> <br />
                <p style={{ fontSize: 15, fontWeight: 'bold' }}> {item.content} </p>
            </List.Item >
        )}
    />);
}

const StyledList = styled(List)`
    .ant-list-item {
        padding-right: 12px;
        padding-left: 12px;
    }
    .ant-list-item {
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .ant-list-item-action {
        margin-top: 30px;
    }
`

export default HashList;