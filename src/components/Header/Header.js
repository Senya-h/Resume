import React from 'react';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <h1 className={styles.header__heading}>Hey, I'm Saulius Rekašius.</h1>
                <p className={styles.header__paragraph}>
                    Web Developer
                </p>
            </div>

        </header>
    );
};

export default Header;