import { useMemo, useState } from "react";
import type { Location } from "./types/location";
import { Sidebar } from "./components/sidebar/sidebar";
import { MapComponent } from "./components/map/map-component";
import { getLocations } from "./utils/get-locations";
import { locationUtils } from "./utils/location-utils";

// import rawLocations from "/public/data/location.json";

// export function getLocationss(): Location[] {
//   return rawLocations.map((location: any) => ({
//     id: location.id,
//     name: location.name,
//     lat: location.location.lat,
//     lng: location.location.lng,
//     rating: location.rating,
//     description: location.description,
//   }));
// }

function App() {
  const locations = getLocations();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "rating">("name");

  const processedLocations = useMemo(() => {
    let filtered = locationUtils.filterLocations(locations, searchTerm);
    return locationUtils.sortLocations(filtered, sortBy);
  }, [locations, searchTerm, sortBy]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleShowAll = () => {
    setSelectedLocation(null);
  };

  const handleClearSelection = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        locations={processedLocations}
        selectedLocation={selectedLocation}
        onLocationSelect={handleLocationSelect}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalCount={locations.length}
      />

      <MapComponent
        locations={processedLocations}
        selectedLocation={selectedLocation}
        onLocationSelect={handleLocationSelect}
        onShowAll={handleShowAll}
        onClearSelection={handleClearSelection}
      />
    </div>
  );
}

export default App;
