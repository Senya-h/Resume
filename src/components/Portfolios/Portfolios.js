import React from 'react';
import styles from './Portfolios.module.scss';
import Portfolio from './Portfolio/Portfolio';

const Portfolios = () => {

    return (
        <section className={styles.portfolios}>
            <h3 className={styles.portfolios__heading}>Here are some of my works and technologies used</h3>

            <div className={styles.portfolios__list}>
                <Portfolio
                    title="Burger Builder"
                    image
                    technologies={["HTML5", "CSS3", "JavaScript", "React", "Redux"]}
                />
                <Portfolio
                    title="TITULAS"
                    image
                    technologies={[]}
                />
            </div>
        </section>
    )
};

export default Portfolios;