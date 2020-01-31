import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'static/css/normalize.scss';
import 'static/css/style.css';

import Logo from '../icons/Logo';

import ogImage from '../static/images/social/git-basics-og-image.png';
import cardImage from '../static/images/social/git-basics-twitter-card-image.png';

import touchIcon from '../static/images/fav/apple-touch-icon.png';
import icon32 from '../static/images/fav/favicon-32x32.png';
import icon16 from '../static/images/fav/favicon-16x16.png';

import styles from './Header.module.scss';

export default function Header({ colorMode }) {
    const themeColor = colorMode === 'light' ? '#eae8dc' : '#001019';

    const siteTitle = 'Git Basics';
    const siteDesc = 'A little cheat sheet of common commands to help you become a Git pro.';
    const siteUrl = 'https://gitbasics.xyz';
    const twitterAcc = '@deadgooddean';

    const siteMeta = (
        <Helmet>
            <title>{siteTitle}</title>

            <meta name="description" content={siteDesc} />
            <meta name="theme-color" content={themeColor} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />

            <link rel="apple-touch-icon" sizes="180x180" href={touchIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={icon16} />

            <meta property="fb:app_id" content="497028727881181" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:image" content={ogImage} />
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
            <meta name="twitter:image" content={cardImage} />
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
