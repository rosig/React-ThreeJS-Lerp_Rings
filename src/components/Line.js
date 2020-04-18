import React, { useState, useMemo } from "react";

import * as THREE from "three";

import { useFrame, useThree } from "react-three-fiber";

const Line = (props) => {
  const [points, setPoints] = useState([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
  ]);

  const { viewport } = useThree();

  const next_x = useMemo(() => props.mouse.x * (viewport.width / 2), [
    props.mouse.x,
    viewport.width,
  ]);

  const next_y = useMemo(() => props.mouse.y * (viewport.height / 2), [
    props.mouse.y,
    viewport.height,
  ]);

  useFrame(() => {
    if (next_x !== points[1].x || next_y !== points[1].y) {
      setPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(next_x, next_y, 0),
      ]);
      console.log(points);
    }
  });

  return (
    <line>
      <geometry attach="geometry" vertices={points} />
      <lineBasicMaterial attach="material" color="#F20574" />
    </line>
  );
};

export default Line;
