import { MapPin } from "lucide-react";
import { StarRating } from "../sidebar/star-rating";
import type { Location } from "../../types/location";

export const SelectedLocationInfo = ({
  location,
}: {
  location: Location | null;
}) => {
  if (!location) return null;

  return (
    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-[1000]">
      <h3 className="font-bold text-lg text-gray-900">{location.name}</h3>
      <div className="flex items-center mt-1 mb-2">
        <MapPin className="w-4 h-4 text-gray-500 mr-1" />
        <span className="text-sm text-gray-600">{location.description}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <StarRating rating={location.rating} />
          <span className="ml-2 text-sm font-medium text-gray-700">
            {location.rating}
          </span>
        </div>
      </div>
    </div>
  );
};
