import React, { Component } from 'react';

import styled from 'styled-components'

import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<div>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
				Add Comment
      </Button>
		</Form.Item>
	</div>
);

class HashPost extends Component {
	state = {
		comments: [],
		submitting: false,
		value: '',
	};

	handleSubmit = () => {
		if (!this.state.value) {
			return;
		}

		this.setState({
			submitting: true,
		});

		setTimeout(() => {
			this.setState({
				submitting: false,
				value: '',
				comments: [
					{
						author: 'Han Solo',
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{this.state.value}</p>,
						datetime: moment().fromNow(),
					},
					...this.state.comments,
				],
			});
		}, 1000);
	};

	handleChange = e => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		const { comments, submitting, value } = this.state;

		return (
			<div>
				<StyledComment
					avatar={
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							alt="Han Solo"
						/>
					}
					content={
						<Editor
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							submitting={submitting}
							value={value}
						/>
					}
				/>
			</div>
		);
	}
}

const StyledComment = styled(Comment)`

`

export default HashPost;