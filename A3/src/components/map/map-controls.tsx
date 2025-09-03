interface MapControlsProps {
  onClearSelection: () => void;
}

export const MapControls = ({ onClearSelection }: MapControlsProps) => {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1000]">
      <div className="text-sm font-medium text-gray-700 mb-1">Map Controls</div>
      <button
        onClick={onClearSelection}
        className="cursor-pointer w-full mt-2 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
      >
        Clear Selection
      </button>
    </div>
  );
};
