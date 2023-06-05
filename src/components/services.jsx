import React, { useState } from 'react';
import Demo1 from './services/Demo1';
import Demo2 from './services/Demo2';
import Demo3 from './services/Demo3';
import Demo4 from './services/Demo4';
import Demo5 from './services/Demo5';
import Demo6 from './services/Demo6';

const Services = () => {
  const services = ["Article Writer 1", "Article Writer 2", "Article Writer 3", "Article Summariser", "Transcript Provider", "Article Generator"];
  const demos = [Demo1, Demo2, Demo3, Demo4, Demo5, Demo6];
  const [openDemos, setOpenDemos] = useState([]);

  const toggleDemo = (index) => {
    const isDemoOpen = openDemos.includes(index);
    setOpenDemos(isDemoOpen ? openDemos.filter(i => i !== index) : [...openDemos, index]);
  }

  return (
    <div className='grid grid-cols-3 gap-4 w-full'>
      {services.map((service, index) => (
        <button 
          key={index} 
          className={openDemos.includes(index) ? 'bg-orange-500 service-button' : 'bg-red-500 service-button'} 
          onClick={() => toggleDemo(index)}>
          {service}
        </button>
      ))}
      {openDemos.sort().map(index => {
        const DemoComponent = demos[index];
        return <DemoComponent key={index} />;
      })}
    </div>
  );
};

export default Services;
