import type { Location } from "../types/location";
import rawLocations from "../assets/location.json";

export function getLocations(): Location[] {
  return rawLocations.map((location: any) => ({
    id: location.id,
    name: location.name,
    lat: location.location.lat,
    lng: location.location.lng,
    rating: location.rating,
    description: location.description,
  }));
}
