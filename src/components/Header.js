import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'static/css/normalize.scss';
import 'static/css/style.css';

import Logo from '../icons/Logo';

import styles from './Header.module.scss';

export default function Header({ colorMode }) {
    const themeColor = colorMode === 'light' ? '#eae8dc' : '#001019';

    const siteTitle = 'Git Basics';
    const siteDesc = 'A little cheat sheet of common commands to help you become a Git pro.';
    const siteUrl = 'http://localhost:8000';
    const ogImg = '/static/src/images/gitgood-og-image.png';
    const twitterImg = '/static/src/images/gitgood-twitter-card-image.png';
    const twitterAcc = '@delliott85';

    const siteMeta = (
        <Helmet>
            <title>{siteTitle}</title>

            <meta name="description" content={siteDesc} />
            <meta name="theme-color" content={themeColor} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />

            <meta property="fb:app_id" content="123456789" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:image" content={ogImg} />
            <meta property="og:image:alt" content={siteDesc} />
            <meta property="og:description" content={siteDesc} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="en_UK" />
            <meta property="article:author" content="Dean Elliott" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitterAcc} />
            <meta name="twitter:creator" content={twitterAcc} />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDesc} />
            <meta name="twitter:image" content={twitterImg} />
            <meta name="twitter:image:alt" content={siteDesc} />

        </Helmet>
    );

    return (
        <header className={styles.header}>
            {siteMeta}
            <h1 className={styles.logo}>
                <Logo />
            </h1>
            <h2 className={styles.subtitle}>A little cheat sheet of common commands to help you become a Git pro.</h2>
        </header>
    );
}

Header.propTypes = {
    colorMode: PropTypes.string
}
