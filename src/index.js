import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Canvas } from "react-three-fiber";
import * as THREE from "three";

//Components
import Rings from "./components/Rings";
import Circle from "./components/Circle";
import Line from "./components/Line";

const App = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const offsetX = e.clientX - width;
    const offsetY = height - e.clientY;

    setMouse({ x: offsetX / width, y: offsetY / height });
  };

  useEffect(() => {
    document.body.style.cursor =
      "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto";
  }, []);

  return (
    <Canvas
      camera={{ fov: 100, position: [0, 0, 3] }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.setClearColor(new THREE.Color("#424242"));
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
      <Line mouse={mouse} /> {/* It doesn't work, I don't know why */}
      <Rings mouse={mouse} />
      <Circle mouse={mouse} />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
