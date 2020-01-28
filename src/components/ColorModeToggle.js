import React from 'react';
import PropTypes from 'prop-types';

import SunIcon from '../icons/Sun';
import MoonIcon from '../icons/Moon';

import styles from './ColorModeToggle.module.scss';

export default function ColorModeToggle({ colorMode, onColorModeClick }) {
    const icon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />;

    const labelText = colorMode === 'light' ? 'Dark Mode' : 'Light Mode';

    return (
        <button
            className={styles.button}
            onClick={onColorModeClick}
        >
            <span className={styles.label}>{labelText}</span>
            <span className={styles.icon}>{icon}</span>
        </button>
    );
}

ColorModeToggle.propTypes = {
    colorMode: PropTypes.string,
    onColorModeClick: PropTypes.func
}
