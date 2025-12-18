import { Seat } from "@/features/seat-selection/interfaces";
import * as THREE from "three";
import { useEffect } from "react";

export const useSeatMaterials = (
  seatMeshMap: React.RefObject<Map<string, THREE.Mesh>>,
  seatDataMap: React.RefObject<Map<string, Seat>>,
  selectedSeats: Set<string>
) => {
  useEffect(() => {
    seatMeshMap.current.forEach((mesh, seatKey) => {
      const seat = seatDataMap.current.get(seatKey);
      if (!seat) return;
      const material = mesh.material as THREE.MeshBasicMaterial;
      if (selectedSeats.has(seatKey)) material.color.setHex(0x3b82f6);
      else if (seat.status === "Free") material.color.setHex(0x22d471);
      else material.color.setHex(0x9f9fa5);
    });
  }, [seatMeshMap, seatDataMap, selectedSeats]);
};
