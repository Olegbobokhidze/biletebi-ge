import { Seat } from "@/features/seat-selection/interfaces";
import { X } from "lucide-react";

interface SeatCardProps {
  seat: Seat;
  onRemove: () => void;
}

export const SeatCard: React.FC<SeatCardProps> = ({ seat, onRemove }) => {
  const divisionName = seat.auditoriumDivisionName?.split("\\")[0] || "დარბაზი";

  return (
    <div className="w-full relative rounded-md flex p-2 gap-2 h-20 border border-gray-300 bg-white">
      <div className="bg-gray-300 w-16 rounded-md h-full flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-600">
          {seat.rowNumber}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <p className="font-semibold">{divisionName}</p>
          <p className="text-sm">
            რიგი: {seat.rowNumber}, ადგილი: {seat.placeNumber}
          </p>
        </div>
        <p className="font-semibold">{seat.amount}</p>
      </div>
      <div
        className="flex cursor-pointer absolute top-2 right-2 hover:bg-gray-100 rounded p-1 transition-colors"
        onClick={onRemove}
      >
        <X className="w-4 h-4" />
      </div>
    </div>
  );
};
