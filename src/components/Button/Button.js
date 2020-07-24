import React from 'react';
import styles from './Button.module.scss';

//variant - contained || outlined
//href - href || null
const Button = (props) => {
    console.log(props);

    if(props.href) {
        return (
            <a href={props.href} className={`${styles.button} ${props.className}`} >
                {props.children}
            </a>
        )
    }    

    return (
        <button className={styles.button} >
            {props.children}
        </button>
    )
};

export default Button;