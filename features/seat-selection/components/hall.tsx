"use client";

import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Seat } from "@/features/seat-selection/interfaces";
import { HallLegend } from "@/features/seat-selection/components/hall-legend";
import { SeatScene } from "@/features/seat-selection/components/seat-scene";

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
  return (
    <div className="relative w-full h-full">
      <Canvas orthographic camera={{ position: [0, 0, 500], zoom: 1 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 1]} intensity={0.8} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={false}
          zoomToCursor
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
    </div>
  );
};
