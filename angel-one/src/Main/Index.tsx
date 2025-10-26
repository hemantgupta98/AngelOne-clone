import React from "react";
import Waves from "../components/ui/Background1";

const Index = () => {
  return (
    <>
      <Waves
        lineColor="#fff"
        backgroundColor="blue"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </>
  );
};

export default Index;
