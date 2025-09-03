import { MapPin } from "lucide-react";
import { StarRating } from "./star-rating";
import type { Location } from "../../types/location";

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onSelect: (location: Location) => void;
}

export const LocationCard = ({
  location,
  isSelected,
  onSelect,
}: LocationCardProps) => {
  return (
    <div
      id={`location-${location.id}`}
      onClick={() => onSelect(location)}
      className={`p-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
        isSelected
          ? "bg-blue-50 border-blue-500 shadow-md ring-2 ring-blue-200"
          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
      }`}
    >
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-500" />
          <h3 className="font-semibold text-gray-900">{location.name}</h3>
        </div>
        <span className="text-sm text-gray-600">{location.description}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <StarRating rating={location.rating} />
            <span className="ml-2 text-sm font-medium text-gray-700">
              {location.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
