import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <Typewriter

    options={{
      strings: ['Software Devloper', 'Frontend Devloper' , 'Open Source Contributor' , 'React Devloper', 'Debuggable'],
      autoStart: true,
      loop: true,
      wrapperClassName: "text-[52px]",
      
      cursorClassName	: 'text-[42px]',

      delay : '250'

      
    }}
  />
  );
};

export default TypewriterComponent;
