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
                    technologies={["HTML5", "CSS3", "JavaScript", "React", "Redux"]}
                />
            </div>
        </section>
    )
};

export default Portfolios;