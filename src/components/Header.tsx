import React from 'react';
import { Home, Moon, Sun } from 'lucide-react';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.header
            className={styles.headerContainer}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.constructionBanner}>
                🚧 Site Under Construction 🚧
            </div>
            <nav className={styles.nav}>
                <a href="#" className={styles.homeLink} aria-label="Home">
                    <Home size={16} strokeWidth={2} />
                </a>
                <ul className={styles.navLinks}>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                </button>
            </nav>
        </motion.header>
    );
};

export default Header;
