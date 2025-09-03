import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../../constants/map";
import type { Location } from "../../types/location";
import { LocationMarker } from "./location-marker";
import { MapController } from "./map-controller";
import { MapControls } from "./map-controls";
import { SelectedLocationInfo } from "./selected-location-info";

interface MapComponentProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
  onClearSelection: () => void;
}

export const MapComponent = ({
  locations,
  selectedLocation,
  onLocationSelect,
  onClearSelection,
}: MapComponentProps) => {
  return (
    <div className="flex-1 relative">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="w-full h-full"
        style={{ minHeight: "400px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController selectedLocation={selectedLocation} />

        {locations.map((location) => (
          <LocationMarker
            key={location.id}
            location={location}
            isSelected={selectedLocation?.id === location.id}
            onSelect={onLocationSelect}
          />
        ))}
      </MapContainer>
      {!!selectedLocation && (
        <MapControls onClearSelection={onClearSelection} />
      )}

      <SelectedLocationInfo location={selectedLocation} />
    </div>
  );
};
