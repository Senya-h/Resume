import React from 'react';
import styles from './Command.module.scss';

const Command = (props) => {

    let input = props.input;
    let output = props.output;

    if(!props.input) {
        input = <span className={styles.command__blink}>&nbsp;</span>
    }

    if(!props.output) {
        output = null;
    }

    if(props.outputLink) {
        output = (<>
                "<a className={styles.command__outputLink} href={props.outputLink.link} rel="noopener noreferrer" target="_blank">
                        {props.outputLink.output}
                </a>"
            </ >
            );
    }

    if(props.outputLinkArray) {
        output = (<div>
            [
                {props.outputLinkArray.map((output, index) => {
                    return ( <span key={index}>
                        "<a 
                            className={styles.command__outputLink} 
                            href={output.link} 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >
                            {output.output}
                        </a>
                        "
                        {props.outputLinkArray.length - 1 !== index? ",": ""}
                        </span>
                    )
                })}
            ]
        </div>)
    }


    
    return (
        <div className={styles.command}>
            <div className={styles.command__input}>
                <span>> </span> 
                {input}
            </div>

            <div className={styles.command__output}>
                {output}
            </div>

        </div>
    )
};

export default Command;