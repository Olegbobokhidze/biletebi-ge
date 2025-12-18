import { Seat } from "@/features/seat-selection/interfaces";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export const useSeatInteractions = (
  pathsGroup: THREE.Group | null,
  seatMeshMap: React.RefObject<Map<string, THREE.Mesh>>,
  seatDataMap: React.RefObject<Map<string, Seat>>,
  onSeatSelect: (seatKey: string) => void
) => {
  const { camera, gl, raycaster } = useThree();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!pathsGroup) return;
      const rect = gl.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        Array.from(seatMeshMap.current.values()),
        true
      );

      let overClickable = false;
      if (intersects.length > 0) {
        const seatKey = intersects[0].object.userData?.seatKey;
        const seat = seatDataMap.current.get(seatKey);
        if (seat?.status === "Free") overClickable = true;
      }

      gl.domElement.style.cursor = overClickable ? "pointer" : "default";
    };

    const handleClick = (event: MouseEvent) => {
      if (!pathsGroup) return;
      const rect = gl.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        Array.from(seatMeshMap.current.values()),
        true
      );
      if (intersects.length > 0) {
        const seatKey = intersects[0].object.userData?.seatKey;
        const seat = seatDataMap.current.get(seatKey);
        if (seat?.status === "Free") onSeatSelect(seatKey);
      }
    };

    gl.domElement.addEventListener("mousemove", handleMouseMove);
    gl.domElement.addEventListener("click", handleClick);

    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
      gl.domElement.removeEventListener("click", handleClick);
    };
  }, [
    pathsGroup,
    seatMeshMap,
    seatDataMap,
    onSeatSelect,
    camera,
    gl.domElement,
    raycaster,
  ]);
};
