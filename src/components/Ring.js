import React, { useRef } from "react";

import { useFrame, useThree } from "react-three-fiber";

const Ring = (props) => {
  const mesh = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.position.x = props.mouse.x * (viewport.width / 2);
    mesh.current.position.y = props.mouse.y * (viewport.height / 2);
  });

  return (
    <mesh ref={mesh}>
      <ringGeometry attach="geometry" args={props.args} />
      <meshPhongMaterial attach="material" color={props.color} />
    </mesh>
  );
};

export default Ring;
