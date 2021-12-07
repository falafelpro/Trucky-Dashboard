import React from "react";

function SiteWelcome() {
  return (
    <div>
      <video
        src="http://localhost:8000/assets/trucky-welcome-vid.mp4"
        autoPlay
        loop
        style={{
          width: 1550,
          height: 870,
          position: "relative",
          right: 400,
          objectFit: "contain",
          zIndex: -1,
        }}
      ></video>
    </div>
  );
}

export default SiteWelcome;
