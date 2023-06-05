import React, { useState } from 'react';
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Services from './components/services';

import "./App.css";

const App = () => {
  const [demoVisible, setDemoVisible] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const toggleDemo = () => {
    setDemoVisible(!demoVisible);
    setButtonClicked(!isButtonClicked);
  }

  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <div className='mb-10'></div>
        <Services />
        {demoVisible && <Demo />}
      </div>
    </main>
  );
};

export default App;
