import { Seat } from "@/features/seat-selection/interfaces";

export const mockSeats: Seat[] = [];

const rows = 5;
const seatsPerRow = 10;

for (let row = 1; row <= rows; row++) {
  for (let seat = 1; seat <= seatsPerRow; seat++) {
    mockSeats.push({
      status: seat % 5 === 0 ? "Reserved" : "Free", 
      key: `${row}-${seat}`,
      amount: 40,
      rowNumber: String(row),
      placeNumber: seat,
      externalId: `${1157752 + row * 10 + seat}`,
    });
  }
}
