import { Home, Minus, Plus } from "lucide-react";
import React from "react";

interface HallControlsProps {
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const HallControls: React.FC<HallControlsProps> = ({
  onReset,
  onZoomIn,
  onZoomOut,
}) => {
  return (
    <>
      <button
        onClick={onReset}
        className="p-2 rounded transition-colors hover:bg-gray-200"
        title="Reset"
      >
        <Home size={20} />
      </button>
      <button
        onClick={onZoomIn}
        className="p-2 rounded transition-colors hover:bg-gray-200"
        title="Zoom In"
      >
        <Plus size={20} />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 rounded transition-colors hover:bg-gray-200"
        title="Zoom Out"
      >
        <Minus size={20} />
      </button>
    </>
  );
};
