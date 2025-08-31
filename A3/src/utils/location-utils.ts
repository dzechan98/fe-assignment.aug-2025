import type { Location } from "../types/location";

export const locationUtils = {
  filterLocations: (locations: Location[], searchTerm: string) => {
    return locations.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  sortLocations: (locations: Location[], sortBy: "rating" | "name") => {
    return [...locations].sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return a[sortBy].localeCompare(b[sortBy]);
    });
  },

  getBounds: (locations: Location[]) => {
    if (locations.length === 0) return null;

    const lats = locations.map((l) => l.lat);
    const lngs = locations.map((l) => l.lng);

    return {
      north: Math.max(...lats),
      south: Math.min(...lats),
      east: Math.max(...lngs),
      west: Math.min(...lngs),
    };
  },
};
