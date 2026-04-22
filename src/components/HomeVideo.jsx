import React from "react";

const HomeVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source
        src="https://uploads-ssl.webflow.com/65b7bac85c1092089d510616/65b8c737f3618d8dd99da139_VIDEO HOME (DSK)-transcode.mp4"
        type="video/mp4"
      />
      <source
        src="https://uploads-ssl.webflow.com/65b7bac85c1092089d510616/65b8c737f3618d8dd99da139_VIDEO HOME (DSK)-transcode.webm"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default HomeVideo;
