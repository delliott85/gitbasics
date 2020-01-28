import React from 'react';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Built by <a href="https://deanelliott.me" target="_blank" rel="noopener noreferrer">Dean Elliott</a></p>
        </footer>
    );
}
