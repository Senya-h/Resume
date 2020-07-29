import React from 'react';
import styles from './Portfolio.module.scss';

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
                    {props.description}
                </p>
                <ul className={styles.portfolio__technologies}>
                    {technologies}
                </ul>

                <div className={styles.portfolio__navigation}>
                    <Button 
                        className={styles['portfolio__button--1']} 
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Demo
                        <FaExternalLinkAlt />
                    </Button>
                    <Button 
                        className={styles['portfolio__button--2']} 
                        href={props.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
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

