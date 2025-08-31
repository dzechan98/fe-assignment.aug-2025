import { RotateCcw } from "lucide-react";

interface MapControlsProps {
  onShowAll: () => void;
  onClearSelection: () => void;
  hasSelection: boolean;
}

export const MapControls = ({
  onShowAll,
  onClearSelection,
  hasSelection,
}: MapControlsProps) => {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1000]">
      <div className="text-sm font-medium text-gray-700 mb-2">Map Controls</div>
      <button
        onClick={onShowAll}
        className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Show All
      </button>
      {hasSelection && (
        <button
          onClick={onClearSelection}
          className="w-full mt-2 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
        >
          Clear Selection
        </button>
      )}
    </div>
  );
};
