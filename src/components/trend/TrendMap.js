import React, { Component } from 'react'
import { Layout, List } from 'antd'

const { Content } = Layout;

const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

class TrendMap extends Component {
    state = {}
    render() {
        return (
            <center>
                <Content style={{ borderTop: '1px solid #ddd' }}>
                    <img src='static/trend/map/thai_yellow.png' />
                    {/* <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        backgroundColor: '#fff',
                        padding: 24,
                        width: 960,
                        height: '100vh'
                    }}>
                        {/* {
                            data.map(function (d) {
                                const locate = {
                                    x: rnd(0, 9),
                                    y: rnd(0, 7)
                                }
                                return <ImageAbsolute {...locate} />
                            })
                        } 
                    </div> */}
                </Content >
            </center >
        );
    }
}

const face = [
    '/static/trend/face_3.png',
    '/static/trend/face_3.png'
]

function getRandom() {
    let ranArr = [];

}

function ImageAbsolute({ x, y }) {
    const size = rnd(10, 150);
    const img = face[rnd(0, 1)]

    return <div style={{
        position: 'absolute',
        left: `${x}0%`,
        top: `${y}0%`,
    }}>
        <div>#facebook</div>
        <img src={img} width={size} height={size} />
    </div>
}

function rand(max, min) {
    return Math.floor(Math.random() * (max - min) + max)
}

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randy() {
    return Math.floor(Math.random() * (6 - 1) + 6)
}

export default TrendMap;