import React from 'react';
import { User, FileText } from 'lucide-react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Hero: React.FC = () => {
    return (
        <main className={styles.heroContainer} id="about">
            <motion.div
                className={styles.titleSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <h1 className={styles.name} style={{ whiteSpace: 'pre-line' }}>
                    {portfolioData.personal.name}
                </h1>
            </motion.div>

            <motion.div
                className={styles.contentSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <p className={styles.highlightText}>
                    {portfolioData.personal.bio.map((line, index) => (
                        <React.Fragment key={index}>
                            <span className={styles.highlight}>{line}</span><br />
                        </React.Fragment>
                    ))}
                </p>
            </motion.div>

            <motion.div
                className={styles.linksSection}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                <div className={styles.sectionLabel}>Where you can start</div>

                {portfolioData.links.map((link, index) => (
                    <a key={index} href={link.url} className={styles.linkItem}>
                        <div className={styles.iconBox}>
                            {link.type === 'person' ? (
                                <User size={22} strokeWidth={1.5} />
                            ) : (
                                <FileText size={22} strokeWidth={1.5} />
                            )}
                        </div>
                        <span>{link.text}</span>
                    </a>
                ))}
            </motion.div>
        </main>
    );
};

export default Hero;
