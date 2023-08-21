import React, { useEffect } from "react";

function loadLottieScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

const MyLottieAnimation = () => {
  useEffect(() => {
    loadLottieScript().then(() => {
      const container = document.getElementById("lottie-container");

      if (container.childElementCount === 0) {
        const lottiePlayer = document.createElement("lottie-player");
        lottiePlayer.src =
          "https://lottie.host/858f6b36-625b-4079-b999-2851113212f5/8roAgjjFXT.json";
        lottiePlayer.background = "transparent";
        lottiePlayer.speed = "1";
        lottiePlayer.style.width = "500px";
        lottiePlayer.style.height = "300px";
        lottiePlayer.loop = true;
        lottiePlayer.autoplay = true;

        container.appendChild(lottiePlayer);
      }
    });
  }, []);

  return (
    <div className="p-5 flex items-center justify-center">
      <div id="lottie-container"></div>
    </div>
  );
};

export default MyLottieAnimation;
