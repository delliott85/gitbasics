import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import 'static/css/normalize.scss';
import 'static/css/style.css';

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    renderSiteMeta() {
        return (
            <Helmet>
                <title>Gatsby Skeleton</title>
            </Helmet>
        );
    }

    render() {
        const { children } = this.props;

        return (
            <div>
                {this.renderSiteMeta()}
                {children}
            </div>
        );
    }
}
