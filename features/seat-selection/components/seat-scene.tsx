"use client";

import { Seat } from "@/features/seat-selection/interfaces";
import { useSvgLoader } from "@/features/seat-selection/hooks/use-svg-loader";
import { useSeatMaterials } from "@/features/seat-selection/hooks/use-seat-materials";
import { useSeatInteractions } from "@/features/seat-selection/hooks/use-seat-intersections";

interface SeatSceneProps {
  svgUrl: string;
  seats: Seat[];
  selectedSeats: Set<string>;
  onSeatSelect: (seatKey: string) => void;
}

export const SeatScene: React.FC<SeatSceneProps> = ({
  svgUrl,
  seats,
  selectedSeats,
  onSeatSelect,
}) => {
  const { pathsGroup, seatMeshMap, seatDataMap } = useSvgLoader(
    svgUrl,
    seats,
    selectedSeats
  );

  useSeatMaterials(seatMeshMap, seatDataMap, selectedSeats);
  useSeatInteractions(pathsGroup, seatMeshMap, seatDataMap, onSeatSelect);

  return pathsGroup ? <primitive object={pathsGroup} /> : null;
};
