import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import Layout from '../layouts/Layout';

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <p>Hello, World!</p>
            </Layout>
        );
    }
}
