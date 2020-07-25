import React from 'react';
import styles from './Footer.module.scss';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {

    const copyInfo = React.useRef();
    const textToCopy = React.useRef();

    const copyText = (e) => {
        const textArea = document.createElement("textarea");

        textArea.value = textToCopy.current.innerText;

        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.background = "transparent";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(textArea);

        copyInfo.current.innerText = "Copied!";
    };

    const resetCopyInfo = () => {
        copyInfo.current.innerText = "Click to copy!";
    }

    return (
        <section id="contact" className={styles.footer}>
            <div style={{padding: '5rem'}}>
                <h3 className={styles.footer__heading}>Contact Me!</h3>

                <div className={styles.footer__contacts}>
                    <button onClick={copyText} onMouseOut={resetCopyInfo}>
                        <span className={styles.footer__tooltip} ref={copyInfo}>Click to copy!</span>
                        <span ref={textToCopy}>rekassaul@gmail.com</span>
                    </button>
                </div>

                <div className={styles.footer__links}>
                    <a href="https://www.linkedin.com/in/saulius-reka%C5%A1ius-24581419b/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/Amkuna" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                </div>
            </div>

            <p className={styles.footer__madeBy}>Saulius Rekašius &copy; {new Date().getFullYear()}</p>
        </section>
    )
};

export default Footer;