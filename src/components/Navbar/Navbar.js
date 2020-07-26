import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {

    const setActive = (e) => {
        e.target.classList.add(styles.navbar__active);
    }

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={`${styles.navbar__item} ${styles.navbar__active}`}>
                    <a 
                        className={styles.navbar__link}
                        href="#home"
                        onClick={setActive}
                        >Home</a>
                    <span className={styles.navbar__delimeter}>/</span>
                </li>
                <li className={styles.navbar__item}>
                    <a 
                        className={styles.navbar__link}
                        href="#about"
                        onClick={setActive}
                        >About</a>
                    <span className={styles.navbar__delimeter}>/</span>
                </li>
                <li className={styles.navbar__item}>
                    <a className={styles.navbar__link} href="#works">Works</a>
                    <span className={styles.navbar__delimeter}>/</span>
                </li>
                <li className={styles.navbar__item}>
                    <a className={styles.navbar__link} href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;