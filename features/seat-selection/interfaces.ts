export interface Seat {
  status: "Free" | "Reserved";
  key: string;
  amount: number;
  rowNumber: string;
  placeNumber: number;
  externalId: string;
  auditoriumDivisionName?: string;
  imageUrl?: string;
}
