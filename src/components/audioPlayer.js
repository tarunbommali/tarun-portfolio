import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

import { AUDIO_SRC_DATA } from '../utils/audioSrcData';


function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audioEl.current.pause();
      } else {
        audioRef.current.audioEl.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <button onClick={togglePlayPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
      <ReactAudioPlayer
        controls={false}
        ref={audioRef}
        src={AUDIO_SRC_DATA[0]}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  );
}

export default AudioPlayer;
