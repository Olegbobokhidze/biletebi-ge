"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Seat } from "@/features/seat-selection/interfaces";
import { HallLegend } from "@/features/seat-selection/components/hall-legend";
import { SeatScene } from "@/features/seat-selection/components/seat-scene";
import type { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { HallControls } from "@/features/seat-selection/components/hall-controls";

interface HallProps {
  svgUrl: string;
  seats: Seat[];
  selectedSeats: Set<string>;
  onSeatSelect: (seatKey: string) => void;
}

export const Hall: React.FC<HallProps> = ({
  svgUrl,
  seats,
  selectedSeats,
  onSeatSelect,
}) => {
  const controlsRef = useRef<ThreeOrbitControls>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);

  const zoomStep = 1;

  const handleZoomIn = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.zoom = Math.min(cameraRef.current.zoom + zoomStep, 5);
      cameraRef.current.updateProjectionMatrix();
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.zoom = Math.max(cameraRef.current.zoom - zoomStep, 0.5);
      cameraRef.current.updateProjectionMatrix();
      controlsRef.current.update();
    }
  };

  const handleReset = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 0, 500);
      cameraRef.current.zoom = 1;
      cameraRef.current.updateProjectionMatrix();
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  return (
    <div className="relative w-full h-full">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 500], zoom: 1 }}
        onCreated={({ camera }) => {
          cameraRef.current = camera as THREE.OrthographicCamera;
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 1]} intensity={0.8} />
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={false}
          zoomToCursor
          maxZoom={5}
          minZoom={0.5}
          mouseButtons={{
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
        <SeatScene
          svgUrl={svgUrl}
          seats={seats}
          selectedSeats={selectedSeats}
          onSeatSelect={onSeatSelect}
        />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4">
        <HallLegend />
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2">
        <HallControls
          onReset={handleReset}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />
      </div>
    </div>
  );
};
