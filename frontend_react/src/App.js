import React from 'react';

import { About, Header, Testimonial, Skills, Projects, Footer } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Testimonial />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
