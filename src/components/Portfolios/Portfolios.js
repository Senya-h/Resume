import React from 'react';
import Portfolio from './Portfolio/Portfolio';

const Portfolios = () => {

    const portfolios = [1, 2, 3, 4].map(portfolio => {
        return (
            <Portfolio

            />
        )
    })

    return (
        <section>
            {portfolios}
        </section>
    )
};

export default Portfolios;