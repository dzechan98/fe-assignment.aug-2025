import { Filter, Search } from "lucide-react";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
  sortBy: "name" | "rating";
  onSortChange: (sortBy: "name" | "rating") => void;
}

export const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}: SearchAndFilterProps) => {
  return (
    <div className="p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <h1 className="text-xl font-bold mb-4">Locations</h1>

      {/* Search */}
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search by name or address..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
        />
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4" />
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as "name" | "rating")}
          className="bg-white text-gray-900 rounded-lg px-3 py-1 text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Sort by Name</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
    </div>
  );
};
