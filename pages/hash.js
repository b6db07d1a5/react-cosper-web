import React, { Component } from 'react'
import Page from '@components/Page'
import HashPost from '@components/hash/HashPost'
import HashList from '@components/hash/HashList'

class Hash extends Component {
    state = {}

    render() {
        return (<Page>
            {/* <HashPost /> */}
            <HashList />
        </Page>);
    }
}

export default Hash;