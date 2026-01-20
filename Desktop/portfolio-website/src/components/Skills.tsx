import React from 'react';
import styles from './Skills.module.css';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    return (
        <section className={styles.skillsContainer} id="skills">
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Technical Skills
            </motion.h2>

            <div className={styles.grid}>
                {portfolioData.skills.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className={styles.categoryTitle}>{category.category}</h3>
                        <div className={styles.skillList}>
                            {category.items.map((skill, idx) => (
                                <span key={idx} className={styles.skillItem}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
