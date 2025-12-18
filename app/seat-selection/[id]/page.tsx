"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { ArrowLeft, Calendar } from "lucide-react";
import { Seat } from "@/features/seat-selection/interfaces";
import { SeatCard } from "@/features/seat-selection/components/seat-card";
import { SeatScene } from "@/features/seat-selection/components/seat-scene";
import { Hall } from "@/features/seat-selection/components/hall";
import { EventCard } from "@/features/seat-selection/components/event-info-card";
import { mockSeats } from "@/features/seat-selection/config/mock-seats";
import Link from "next/link";

export default function SeatSelectionPage() {
  const [selectedSeatKeys, setSelectedSeatKeys] = useState<Set<string>>(
    new Set()
  );

  const handleSeatSelect = (seatKey: string) => {
    setSelectedSeatKeys((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(seatKey)) {
        newSet.delete(seatKey);
      } else {
        newSet.add(seatKey);
      }
      return newSet;
    });
  };

  const handleRemoveSeat = (seatKey: string) => {
    setSelectedSeatKeys((prev) => {
      const newSet = new Set(prev);
      newSet.delete(seatKey);
      return newSet;
    });
  };

  const selectedSeats = mockSeats.filter((seat) =>
    selectedSeatKeys.has(seat.key)
  );
  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.amount, 0);

  return (
    <div className="w-full flex text-black bg-white">
      <div className="w-[40%] shadow-[inset_-1px_0_40px_-5px_rgba(0,0,0,0.3)] pt-32 pb-8 px-16 flex flex-col h-screen gap-4">
        <Link
          href="/"
          className="p-2 w-fit flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded transition-colors"
        >
          <ArrowLeft />
        </Link>

        <EventCard
          title="მაკნატუნა"
          shortTitle="მაკნატუნა"
          date="ხუთ, 18 დეკ"
          time="19:00"
          location="გრიბოედოვის თეატრი"
        />

        <div className="flex items-center justify-between py-2 border-b">
          <h2 className="font-semibold">არჩეული ადგილები</h2>
          <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {selectedSeats.length}
          </span>
        </div>

        <div className="flex flex-col gap-2 grow overflow-auto">
          {selectedSeats.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p className="text-center">აირჩიეთ ადგილები რუკიდან</p>
            </div>
          ) : (
            selectedSeats.map((seat) => (
              <SeatCard
                key={seat.key}
                seat={seat}
                onRemove={() => handleRemoveSeat(seat.key)}
              />
            ))
          )}
        </div>

        <div className="w-full mt-auto space-y-3">
          {selectedSeats.length > 0 && (
            <div className="flex justify-between items-center py-2 border-t">
              <span className="font-semibold">სულ:</span>
              <span className="text-xl font-bold">{totalPrice}</span>
            </div>
          )}
          <button
            disabled={selectedSeats.length === 0}
            className="w-full bg-green-600/70 cursor-pointer text-white hover:bg-green-500/70 transition-colors font-semibold py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ყიდვა ({selectedSeats.length} ადგილი)
          </button>
        </div>
      </div>

      <div className="w-[60%] h-screen bg-gray-50">
        <Hall
          svgUrl="/hall.svg"
          seats={mockSeats}
          onSeatSelect={handleSeatSelect}
          selectedSeats={selectedSeatKeys}
        />
      </div>
    </div>
  );
}
