import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Location } from "../../types/location";
import { LocationMarker } from "./location-marker";
import { SelectedLocationInfo } from "./selected-location-info";
import { MapController } from "./map-controller";
import { MapControls } from "./map-controls";

interface MapComponentProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
  onShowAll: () => void;
  onClearSelection: () => void;
}

export const MapComponent = ({
  locations,
  selectedLocation,
  onLocationSelect,
  onShowAll,
  onClearSelection,
}: MapComponentProps) => {
  return (
    <div className="flex-1 relative">
      <MapContainer
        center={[16.0471, 108.2068]}
        zoom={6}
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

      <MapControls
        onShowAll={onShowAll}
        onClearSelection={onClearSelection}
        hasSelection={!!selectedLocation}
      />

      <SelectedLocationInfo location={selectedLocation} />
    </div>
  );
};
