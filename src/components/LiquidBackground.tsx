import React from 'react';
import styles from './LiquidBackground.module.css';

const LiquidBackground: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />
        </div>
    );
};

export default LiquidBackground;
