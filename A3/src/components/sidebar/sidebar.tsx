import type { Location, SortBy } from "../../types/location";
import { LocationList } from "./location-list";

interface SidebarProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
  sortBy: SortBy;
  onSortChange: (sortBy: SortBy) => void;
  totalCount: number;
}

export const Sidebar = ({
  locations,
  selectedLocation,
  onLocationSelect,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: SidebarProps) => {
  return (
    <LocationList
      locations={locations}
      selectedLocation={selectedLocation}
      onLocationSelect={onLocationSelect}
      searchTerm={searchTerm}
      onSearchChange={onSearchChange}
      sortBy={sortBy}
      onSortChange={onSortChange}
      totalCount={totalCount}
    />
  );
};
