import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { Location } from "../../types/location";

interface LocationMakerProps {
  location: Location;
  isSelected: boolean;
  onSelect: (location: Location) => void;
}

export const LocationMarker = ({
  location,
  isSelected,
  onSelect,
}: LocationMakerProps) => {
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div class="w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
      isSelected
        ? "bg-red-500 scale-125 ring-4 ring-red-300"
        : "bg-blue-500 hover:bg-blue-600"
    }"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <Marker
      position={[location.lat, location.lng]}
      icon={customIcon}
      eventHandlers={{
        click: () => onSelect(location),
      }}
    >
      <Popup maxWidth={300}>
        <div className="p-2">
          <h3 className="font-bold text-lg">{location.name}</h3>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 font-semibold">{location.rating}</span>
            </div>
          </div>
          <p className="text-sm">{location.description}</p>
        </div>
      </Popup>
    </Marker>
  );
};
