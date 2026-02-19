import React from 'react';
import styles from './Projects.module.css';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <section className={styles.projectsContainer} id="work">
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={styles.title}>Selected Work</h2>
            </motion.div>

            <div className={styles.grid}>
                {portfolioData.projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        key={index}
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <ArrowUpRight size={20} opacity={0.5} />
                        </div>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.techStack}>
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
