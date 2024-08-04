// Para reproducir un video debemos instalar el paquete de REACT
// npm install react-player

// Colocar este codigo en el globals.css para que se pueda reproducir los videos en celular

// CODIGO: @layer base {
//   .react-player video::-webkit-media-controls {
//     display: none !important;
//   }
// }

"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {isClient ? (
        <ReactPlayer
          url="/assets/video.mp4"
          playing
          loop
          width="100%"
          height="50%"
          muted
          playsinline
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      ) : (
        <div className="w-600 h-338 bg-gray-300"></div>
      )}
    </div>
  );
};

export default VideoPlayer;
