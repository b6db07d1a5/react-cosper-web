import React, { Component } from 'react'
import Page from '@components/Page'
import HashJam from '@components/hash/HashJam'
import HashList from '@components/hash/HashList'

class Hash extends Component {
    state = {}

    render() {
        return (<Page>
            <HashJam />
            <HashList />
        </Page>);
    }
}

export default Hash;