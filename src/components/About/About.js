import React from 'react';
import styles from './About.module.scss';
import {FaTerminal} from 'react-icons/fa';
import Command from '../Command/Command';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.about__bar}>
                <div className={styles["about__terminal-icons"]}>
                    <FaTerminal />
                    <div className={`${styles["about__traffic-light"]} ${styles["about__terminal-pin"]}`}></div>
                </div>
                <div className={styles["about__terminal-title"]}>
                    <h6 className={styles["about__terminal-name"]}>~: node —— Konsole</h6>
                </div>
                <div className={styles["about__traffic-lights"]}>
                    <div className={`${styles["about__traffic-light"]} ${styles["about__traffic-light--1"]}`}></div>
                    <div className={`${styles["about__traffic-light"]} ${styles["about__traffic-light--2"]}`}></div>
                    <div className={`${styles["about__traffic-light"]} ${styles["about__traffic-light--3"]}`}></div>
                </div>
            </div>
            <div className={styles.about__code}>
                <Command 
                    input="currentLocation"
                    output='"Kaunas, Lithuania"'
                />
                <Command 
                    input="contactInfo"
                    outputLinkArray={[
                        {
                            link: "gmail",
                            output: "rekassaul@gmail.com"
                        },
                        {
                            link: "https://github.com/Amkuna",
                            output: "GitHub"
                        },
                        {
                            link: "https://www.linkedin.com/in/saulius-reka%C5%A1ius-24581419b/",
                            output: "LinkedIn"
                        }
                    ]}
                />
                <Command 
                    input="resume"
                    outputLink={{
                        link: "/saulius-rekasius.pdf",
                        output: 'saulius-rekasius.pdf'
                    }}

                />
                <Command 
                    input="interests"
                    output='["music", "volunteering", "swimming", "tv shows"]'
                />
                <Command 
                    input="education"
                    output='"Web Programming, Kaunas Information of Technology School"'
                />
                <Command 
                    input="skills"
                    output='["HTML5", "CSS3", "Saas", "JS", "React", "Redux", "PHP", "Laravel", "NodeJS"]'
                />
                <Command 

                />
            </div>
        </section>
    )
};

export default About;