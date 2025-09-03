import { useMemo, useState } from "react";
import { MapComponent } from "./components/map/map-component";
import { Sidebar } from "./components/sidebar/sidebar";
import type { Location, SortBy } from "./types/location";
import { getLocations } from "./utils/get-locations";
import { locationUtils } from "./utils/location-utils";

function App() {
  const locations = getLocations();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("name");

  const processedLocations = useMemo(() => {
    let filtered = locationUtils.filterLocations(locations, searchTerm);
    return locationUtils.sortLocations(filtered, sortBy);
  }, [locations, searchTerm, sortBy]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
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
        onClearSelection={handleClearSelection}
      />
    </div>
  );
}

export default App;
