import React from 'react';
import styles from './Portfolios.module.scss';
import Portfolio from './Portfolio/Portfolio';
import burgerBuilderImage from '../../assets/img/burger_builder.png';

const Portfolios = () => {

    return (
        <section id="works" className={styles.portfolios}>
            <h3 className={styles.portfolios__heading}>Here are some of my works and technologies used</h3>

            <div className={styles.portfolios__list}>
                <Portfolio
                    title="Burger Builder"
                    imageSrc={burgerBuilderImage}
                    demoLink="https://rekasius-burger.netlify.app/"
                    technologies={["HTML5", "CSS3", "JavaScript", "React", "Redux"]}
                    description="Order your own built burger! Rebuilt and expanded from Maximilian Schwarzmüller's design for Burger Builder."
                    sourceLink="https://github.com/Amkuna/burger-builder"
                />
            </div>
        </section>
    )
};

export default Portfolios;