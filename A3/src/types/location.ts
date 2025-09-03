export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  rating: number;
}

export type SortBy = "name" | "rating";
