import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { useRef, useState, useEffect } from "react";
import { Seat } from "@/features/seat-selection/interfaces";

export const useSvgLoader = (
  svgUrl: string,
  seats: Seat[],
  selectedSeats: Set<string>
) => {
  const [pathsGroup, setPathsGroup] = useState<THREE.Group | null>(null);
  const seatMeshMap = useRef<Map<string, THREE.Mesh>>(new Map());
  const seatDataMap = useRef<Map<string, Seat>>(new Map());

  useEffect(() => {
    seatDataMap.current.clear();
    seats.forEach((seat) => seatDataMap.current.set(seat.key, seat));
  }, [seats]);

  useEffect(() => {
    const loader = new SVGLoader();
    loader.load(svgUrl, (data) => {
      const group = new THREE.Group();
      seatMeshMap.current.clear();

      data.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path);
        const seatKey = path.userData?.node?.getAttribute("seat-key");
        if (shapes.length === 0) return;

        const geometry = new THREE.ShapeGeometry(shapes);
        let color = path.color;

        if (seatKey) {
          const seat = seatDataMap.current.get(seatKey);
          if (selectedSeats.has(seatKey)) color = new THREE.Color(0x3b82f6);
          else if (seat?.status === "Free") color = new THREE.Color(0x22d471);
          else if (seat?.status === "Reserved")
            color = new THREE.Color(0x9f9fa5);
        }

        const material = new THREE.MeshBasicMaterial({
          color,
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const mesh = new THREE.Mesh(geometry, material);

        if (seatKey) {
          mesh.userData = {
            seatKey,
            isClickable: seatDataMap.current.get(seatKey)?.status === "Free",
          };
          seatMeshMap.current.set(seatKey, mesh);
        }

        group.add(mesh);

        path.subPaths.forEach((subPath) => {
          const points = subPath.getPoints();
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({ color: 0x9f9fa5 })
          );
          group.add(line);
        });
      });

      group.scale.multiplyScalar(0.4);
      group.scale.y *= -1;
      const box = new THREE.Box3().setFromObject(group);
      const center = box.getCenter(new THREE.Vector3());
      group.position.x -= center.x;
      group.position.y -= center.y;

      setPathsGroup(group);
    });
  }, [svgUrl, selectedSeats]);

  return { pathsGroup, seatMeshMap, seatDataMap };
};
