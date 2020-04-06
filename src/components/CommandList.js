import React from 'react';

import { data } from '../../data';
import { activeTypes } from '../utils/constants';

import Command from '../components/Command';

import styles from './CommandList.module.scss';

export default function CommandList() {
    const sections = activeTypes.map((type, i) => {
        const items = data.filter(command => command.type === type.type).map((command, i) => {
            return (
                <Command
                    key={`command-${i}`}
                    command={command}
                />
            );
        });

        return (
            <div className={styles.section} key={i}>
                <header className={styles.header}>
                    <h3 className={styles.title}>{type.title}</h3>
                </header>
                <ul className={styles.grid}>
                    {items}
                </ul>
            </div>
        );
    });

    return sections;
}
