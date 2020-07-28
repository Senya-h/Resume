import React from 'react';
import styles from './Header.module.scss';
import ParticlesBg from 'particles-bg';

const Header = () => {

    return (
        <header id="home" className={styles.header}>
            <ParticlesBg type="cobweb" color="#01ffb3" /> {/*lines, circle,  */}
            <div className={styles.header__content}>
                <h1 className={styles.header__heading}>Hey, I'm Saulius Rekašius</h1>
                <p className={styles.header__paragraph}>
                    Web Developer
                </p>
            </div>

        </header>
    );
};

export default Header;