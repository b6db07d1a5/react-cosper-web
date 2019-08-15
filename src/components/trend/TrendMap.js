import React, { Component } from 'react'
import { Layout, List } from 'antd'

const { Content } = Layout;

const data = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

class TrendMap extends Component {
	state = {}
	render() {

		const x = 4;
		const y = 0;

		const padd = 50;

		const arr = [
			{ xs: 3, xe: 3, y: 0 },
			{ xs: 1, xe: 4, y: 1 },
			{ xs: 1, xe: 7, y: 2 },
			{ xs: 2, xe: 7, y: 3 },
			{ xs: 2, xe: 8, y: 4 },
			{ xs: 2, xe: 8, y: 5 },
			{ xs: 3, xe: 5, y: 6 },
			{ xs: 3, xe: 5, y: 7 },
			{ xs: 3, xe: 3, y: 8 },

			{ xs: 2, xe: 2, y: 9 },
			{ xs: 2, xe: 3, y: 10 },
			{ xs: 2, xe: 4, y: 11 },
			{ xs: 3, xe: 4, y: 12 },

		]
		return (
			<center>
				<Content style={{ borderTop: '1px solid #ddd' }}>
					<div style={{
						paddingTop: padd, paddingBottom: padd,
						backgroundColor: '#fff',
						width: 960,
						textAlign: 'center',
						position: 'relative',
					}}>
						<img src='static/trend/map/thai_yellow.png' />
						<ImageAbsolute x={3} y={0} />
						<ImageAbsolute x={4} y={1} />
						<ImageAbsolute x={7} y={2} />
						<ImageAbsolute x={7} y={3} />
						<ImageAbsolute x={8} y={4} />
						<ImageAbsolute x={8} y={5} />
						<ImageAbsolute x={5} y={6} />
						<ImageAbsolute x={5} y={7} />
						<ImageAbsolute x={3} y={8} />
						<ImageAbsolute x={2} y={9} />
						<ImageAbsolute x={3} y={10} />
						<ImageAbsolute x={4} y={11} />
						<ImageAbsolute x={4} y={12} />
					</div>
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


{/* <ImageAbsolute x={3} y={0} />
<ImageAbsolute x={4} y={1} />
<ImageAbsolute x={7} y={2} />
<ImageAbsolute x={7} y={3} />
<ImageAbsolute x={8} y={4} />
<ImageAbsolute x={8} y={5} />
<ImageAbsolute x={5} y={6} />
<ImageAbsolute x={5} y={7} />
<ImageAbsolute x={3} y={8} />
<ImageAbsolute x={2} y={9} />
<ImageAbsolute x={3} y={10} />
<ImageAbsolute x={4} y={11} />
<ImageAbsolute x={4} y={12} /> */}

const face = [
	'/static/trend/face_3.png',
	'/static/trend/face_3.png'
]

function getRandom() {
	let ranArr = [];

}

function ImageAbsolute({ x, y }) {
	const size = rnd(100, 100);
	const img = face[rnd(0, 1)]

	return <div style={{
		position: 'absolute',
		left: `${x}00px`,
		top: `${y}00px`,
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