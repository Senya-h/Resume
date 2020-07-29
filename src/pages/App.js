import React from 'react';
import Header from '../components/Header/Header';
import Portfolios from '../components/Portfolios/Portfolios';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

function App() {

  window.addEventListener("scroll", () => {
    // console.log(window.scrollY); //the amount scrolled from the top
  })

  return (
    <div className="App">
      <Header />
      <About />
      <Portfolios />
      <Footer />
    </div>
  );
}

export default App;
