'use client';
import {Canvas,useFrame} from '@react-three/fiber';
import {MeshTransmissionMaterial,Float,Environment} from '@react-three/drei';
import {useRef} from 'react';
import * as THREE from 'three';
function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((s)=>{if(ref.current){ref.current.rotation.x=s.clock.elapsedTime*.22;ref.current.rotation.y=s.clock.elapsedTime*.34}});return <Float speed={1.4} rotationIntensity={.5} floatIntensity={1}><mesh ref={ref}><icosahedronGeometry args={[1.45,4]}/><MeshTransmissionMaterial thickness={.35} roughness={.08} transmission={1} ior={1.6} chromaticAberration={.12} anisotropy={.2} color="#7cf7d4"/></mesh></Float>}
export default function Scene(){return <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#07090b]"><Canvas camera={{position:[0,0,4.5],fov:45}} dpr={[1,1.75]} gl={{antialias:true,powerPreference:'high-performance'}}><ambientLight intensity={1}/><pointLight position={[3,3,3]} intensity={20} color="#7cf7d4"/><pointLight position={[-3,-2,2]} intensity={10} color="#5d7cff"/><Core/><Environment preset="city"/></Canvas></div>}