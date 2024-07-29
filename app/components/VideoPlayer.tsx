// Para reproducir un video debemos instalar el paquete de REACT
// npm install react-player
"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-center items-center my-5">
      {isClient ? (
        <ReactPlayer
          className="border-2 border-black rounded-lg"
          url="/assets/video.mp4"
          playing
          loop
          controls={false}
          width="100%"
          height="50%"
          muted
        />
      ) : (
        <div className="w-600 h-338 bg-gray-300"></div>
      )}
    </div>
  );
};

export default VideoPlayer;
