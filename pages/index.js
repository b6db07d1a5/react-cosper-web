import React, { Component } from 'react'

import Page from '@components/Page'
import TrendMap from '@components/trend/TrendMap'

class Index extends Component {
    render() {
        return <Page>
            <TrendMap />
        </Page>;
    }
}

export default Index;