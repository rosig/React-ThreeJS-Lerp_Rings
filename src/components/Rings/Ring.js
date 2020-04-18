import React, { useRef, useMemo } from "react";

import { useFrame, useThree } from "react-three-fiber";

import lerp from "lerp"; /*Linear interpolation*/

const Ring = (props) => {
  const mesh = useRef();
  const { viewport } = useThree();

  const next_x = useMemo(() => props.mouse.x * (viewport.width / 2), [
    props.mouse.x,
    viewport.width,
  ]);

  const next_y = useMemo(() => props.mouse.y * (viewport.height / 2), [
    props.mouse.y,
    viewport.height,
  ]);

  let t = 0;

  useFrame(() => {
    if (mesh.current.position.x !== next_x) {
      mesh.current.position.x = lerp(mesh.current.position.x, next_x, t);
      mesh.current.position.y = lerp(mesh.current.position.y, next_y, t);
      t += props.t;
    }
    mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <ringGeometry attach="geometry" args={props.args} />
      <meshPhongMaterial attach="material" color={props.color} />
    </mesh>
  );
};

export default Ring;
