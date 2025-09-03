import { useEffect, useRef } from "react";
import { SearchAndFilter } from "./search-and-filter";
import { LocationCard } from "./location-card";
import { MapPin } from "lucide-react";
import type { Location, SortBy } from "../../types/location";

interface LocationListProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
  sortBy: SortBy;
  onSortChange: (sortBy: SortBy) => void;
  totalCount: number;
}

export const LocationList = ({
  locations,
  selectedLocation,
  onLocationSelect,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: LocationListProps) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (!selectedLocation || !listRef.current) return;

    const element = document.getElementById(`location-${selectedLocation.id}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedLocation]);

  return (
    <div className="w-1/3 bg-white shadow-lg flex flex-col">
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        sortBy={sortBy}
        onSortChange={onSortChange}
      />

      <div className="flex-1 overflow-y-auto" ref={listRef}>
        {
          <div className="p-2">
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isSelected={selectedLocation?.id === location.id}
                onSelect={onLocationSelect}
              />
            ))}
            {locations.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No locations found matching your search.</p>
              </div>
            )}
          </div>
        }
      </div>

      <div className="p-4 border-t bg-gray-50 text-sm text-gray-600">
        Showing {locations.length} of {totalCount} locations
      </div>
    </div>
  );
};
