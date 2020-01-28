import React, { useState, useEffect } from 'react';

import { data } from '../../data';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Command from '../components/Command';
import ColorModeToggle from '../components/ColorModeToggle';

import styles from './index.module.scss';

export default function Index() {
    const [colorMode, setColorMode] = useState(localStorage.getItem('colorMode') || 'light');

    useEffect(() => {
        document.body.setAttribute('color-mode', colorMode);
    }, []);

    const handleChangeColorMode = () => {
        const newColorMode = colorMode === 'light' ? 'dark' : 'light';

        // Set color mode in state
        setColorMode(newColorMode);

        // Assign color mode to body & set local storage to remember for future visits
        document.body.setAttribute('color-mode', newColorMode);
        localStorage.setItem('colorMode', newColorMode);
    }

    const items = data.map((item, i) => {
        return (
            <Command
                key={`command-${i}`}
                command={item}
            />
        );
    });

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <ul className={styles.grid}>
                {items}
            </ul>
            <Footer />
            <ColorModeToggle
                colorMode={colorMode}
                onColorModeClick={handleChangeColorMode}
            />
            <textarea
                id="command-input"
                style={{
                    position: 'absolute',
                    left: '-200vw'
                }}
            />
        </div>
    );
}
