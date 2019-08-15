import React, { Component } from 'react'
import Page from '@components/Page'
import HashList from '@components/hash/HashList'

class Hash extends Component {
    state = {}

    render() {
        return (<Page>
            <HashList />
        </Page>);
    }
}

export default Hash;