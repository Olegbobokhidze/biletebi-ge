"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface EventCardProps {
  title: string;
  shortTitle?: string;
  date: string;
  time: string;
  location: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  shortTitle,
  date,
  time,
  location,
}) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <div className="w-46 h-20 bg-linear-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        {shortTitle || title}
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-lg">{title}</h1>
        <div className="flex gap-1 items-center">
          <Calendar className="w-4 h-4" />
          <p className="text-sm">
            {date}, {time}
          </p>
        </div>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
};
