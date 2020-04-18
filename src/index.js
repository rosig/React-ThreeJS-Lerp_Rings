import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Canvas } from "react-three-fiber";
import * as THREE from "three";

import Ring from "./components/Ring";

const App = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const offsetX = e.clientX - width;
    const offsetY = height - e.clientY;

    setMouse({ x: offsetX / width, y: offsetY / height });
  };

  return (
    <Canvas
      camera={{ fov: 100, position: [0, 0, 3] }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.setClearColor(new THREE.Color("grey"));
      }}
      onClick={(e) => handleClick(e)}
    >
      <pointLight
        color={"#ffffff"}
        intensity={1}
        position={[10, 10, 10]}
        decay={1}
      />
      <ambientLight color={"#ffffff"} intensity={1} />
      <Ring args={[0.8, 1.0, 10]} color={"#000429"} mouse={mouse} />
      <Ring args={[0.6, 0.8, 10]} color={"#060940"} mouse={mouse} />
      <Ring args={[0.4, 0.6, 10]} color={"#2B1773"} mouse={mouse} />
      <Ring args={[0.2, 0.4, 10]} color={"#7D52D9"} mouse={mouse} />
      <Ring args={[0.0, 0.2, 10]} color={"#F20574"} mouse={mouse} />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
