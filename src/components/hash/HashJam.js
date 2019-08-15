import React, { Component } from 'react';
import { Modal } from "antd";

class HashJam extends Component {
    state = {
        visible: false
    };

    render() {
        return (<Modal
            title="#jam your message!!"
            visible={this.state.visible}
            footer={""}
        >
            <div> GGWWPP</div>
        </Modal>);
    }
}

export default HashJam;