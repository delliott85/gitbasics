import React from 'react';
import PropTypes from 'prop-types';

import styles from './Command.module.scss';

export default function Command({ command }) {
    const copyCommand = (target) => {
        const command = target.getAttribute('data-command');

        const fauxInput = document.getElementById('command-input');
        fauxInput.value = command;
        fauxInput.select();
        document.execCommand('copy');
    }

    const handleCommandClick = (e) => {
        const target = e.currentTarget;
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        if (!isMobile) {
            copyCommand(target);
            target.setAttribute('data-active', true);

            setTimeout(() => {
                target.setAttribute('data-active', false);
            }, 1500);
        }
    }

    return (
        <li className={styles.box}>
            <small className={styles.tag}>{command.type}</small>
            <pre
                data-command={command.command}
                className={styles.command}
                onClick={handleCommandClick}
            >
                {command.command}
            </pre>
            <p>{command.description}</p>
        </li>
    );
}

Command.propTypes = {
    command: PropTypes.object
}
