// AudioPlayerContext.js
import React, { createContext, useState } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <AudioPlayerContext.Provider value={{ isPlaying, togglePlayPause }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerContext;
