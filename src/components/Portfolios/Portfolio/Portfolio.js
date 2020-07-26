import React from 'react';
import styles from './Portfolio.module.scss';

import img from '../../../assets/img/hero.jpg';

import Button from '../../Button/Button';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const Portfolio = (props) => {
    let technologies = props.technologies.map((technology, index) => {
        return (
            <li key={index} className={styles.portfolio__technology}>
                {technology}
            </li>
        )
    });

    return (
        <article className={styles.portfolio}>
            <div className={styles["portfolio__image-container"]}>
                <img src={props.imageSrc} alt="project_photo" />
            </div>
            <div className={styles.portfolio__info}>
                <h4 className={styles.portfolio__title}>{props.title}</h4>
                <p className={styles.portfolio__about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className={styles.portfolio__technologies}>
                    {technologies}
                </ul>

                <div className={styles.portfolio__navigation}>
                    <Button 
                        className={styles['portfolio__button--1']} 
                        href="https://www.google.com"
                    >
                        View Demo
                        <FaExternalLinkAlt />
                    </Button>
                    <Button 
                        className={styles['portfolio__button--2']} 
                        href="#"
                    >
                        <FaGithub /> 
                        Source Code
                    </Button>
                </div>
            </div>

        </article>
    )
}

export default Portfolio;

