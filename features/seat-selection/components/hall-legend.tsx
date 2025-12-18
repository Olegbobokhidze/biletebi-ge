export const HallLegend = () => {
  return (
    <div className="flex gap-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-green-500 rounded"></div>
        <span>თავისუფალი</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-500 rounded"></div>
        <span>არჩეული</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-400 rounded"></div>
        <span>დაკავებული</span>
      </div>
    </div>
  );
};
