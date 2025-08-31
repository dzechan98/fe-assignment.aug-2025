import { useMap } from "react-leaflet";
import { useEffect } from "react";
import type { Location } from "../../types/location";

interface MapControllerProps {
  selectedLocation: Location | null;
}

export const MapController = ({ selectedLocation }: MapControllerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!selectedLocation) return;

    map.flyTo([selectedLocation.lat, selectedLocation.lng], 15, {
      animate: true,
      duration: 1.5,
    });
  }, [map, selectedLocation]);

  return null;
};
