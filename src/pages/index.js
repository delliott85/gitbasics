import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CommandList from '../components/CommandList';
import ColorModeToggle from '../components/ColorModeToggle';

export default function Index() {
    const windowGlobal = typeof window !== 'undefined' && window;

    let initColorMode = 'light';
    if (windowGlobal) {
        initColorMode = windowGlobal.localStorage.getItem('colorMode') || 'light'
    }
    const [colorMode, setColorMode] = useState(initColorMode);

    useEffect(() => {
        document.body.setAttribute('color-mode', colorMode);
    }, []);

    const handleChangeColorMode = () => {
        const newColorMode = colorMode === 'light' ? 'dark' : 'light';

        // Set color mode in state
        setColorMode(newColorMode);

        // Assign color mode to body & set local storage to remember for future visits
        document.body.setAttribute('color-mode', newColorMode);
        windowGlobal.localStorage.setItem('colorMode', newColorMode);
    }

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <CommandList />
            <Footer />
            <ColorModeToggle
                colorMode={colorMode}
                onColorModeClick={handleChangeColorMode}
            />
            <textarea
                id="command-input"
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: '-200vw'
                }}
            />
        </div>
    );
}
