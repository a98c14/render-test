/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import DamagedHelmet from "./DamagedHelmet.gltf";

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF(DamagedHelmet);
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                material={materials.Material_MR}
                geometry={nodes["node_damagedHelmet_-6514"].geometry}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/DamagedHelmet.gltf");