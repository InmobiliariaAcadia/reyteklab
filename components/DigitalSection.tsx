import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const ModelLoading = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20">
    <div className="w-12 h-[1px] bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 animate-loading-bar"></div>
    </div>
    <span className="text-[7px] uppercase tracking-[0.5em] text-slate-400 mt-4 animate-pulse">Escaneando Precisión...</span>
    <style>{`
      @keyframes loadingBar {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-loading-bar {
        width: 50%;
        animation: loadingBar 2s infinite linear;
      }
    `}</style>
  </div>
);

const CrownModel = () => {
  const crownGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0.5, 0.5);
    shape.quadraticCurveTo(0.7, 0, 0.5, -0.5);
    shape.quadraticCurveTo(0, -0.7, -0.5, -0.5);
    shape.quadraticCurveTo(-0.7, 0, -0.5, 0.5);
    shape.quadraticCurveTo(0, 0.7, 0.5, 0.5);
    const extrudeSettings = { 
      steps: 2, 
      depth: 0.8, 
      bevelEnabled: true, 
      bevelThickness: 0.2, 
      bevelSize: 0.2, 
      bevelOffset: 0, 
      bevelSegments: 5 
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh geometry={crownGeometry} rotation={[Math.PI / 2.5, 0, 0]} scale={1.2}>
        <MeshDistortMaterial
          color="#f8fafc"
          roughness={0.05}
          metalness={0.1}
          distort={0.05}
          speed={2}
        />
      </mesh>
      <mesh geometry={crownGeometry} rotation={[Math.PI / 2.5, 0, 0]} scale={1.205}>
        <meshBasicMaterial color="#94a3b8" wireframe opacity={0.05} transparent />
      </mesh>
    </Float>
  );
};

export const DigitalSection: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden" id="digital">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 relative z-10">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-slate-400 font-bold mb-10 italic">Ingeniería Avanzada</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-12 leading-tight">
              Ingeniería <br />
              <span className="italic font-normal text-slate-400">Invisible.</span>
            </h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed mb-16 max-w-md">
              La perfección no es un accidente, es el resultado de un flujo digital que elimina la vibración humana para entregar una precisión de micras.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <span className="text-[20px] font-serif text-slate-900 block">±0.005mm</span>
                <span className="text-[7px] uppercase tracking-[0.3em] text-slate-400 font-bold">Tolerancia Máxima</span>
              </div>
              <div className="space-y-2">
                <span className="text-[20px] font-serif text-slate-900 block">5-Ejes</span>
                <span className="text-[7px] uppercase tracking-[0.3em] text-slate-400 font-bold">Protocolo de Fresado</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-square bg-slate-50 relative border border-slate-100 overflow-hidden group">
               <Suspense fallback={<ModelLoading />}>
                <Canvas shadows dpr={[1, 2]} style={{ touchAction: 'none' }}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
                  <ambientLight intensity={1.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} />
                  <CrownModel />
                  <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
                  <Environment preset="city" />
                  <OrbitControls enablePan={false} minDistance={3} maxDistance={8} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </Suspense>
              
              <div className="absolute top-8 left-8 pointer-events-none">
                 <div className="text-[7px] uppercase tracking-[0.4em] text-slate-400 border-l border-slate-900 pl-4 py-1">
                    Reytek Simulation Core v.5.0 <br/>
                    Propiedad de Mastery Lab
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};