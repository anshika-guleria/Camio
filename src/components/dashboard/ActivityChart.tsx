export function ActivityChart() {
  const bars = [28, 46, 32, 64, 52, 78, 40];

  return (
    <div className="flex h-40 items-end gap-2">
      {bars.map((height, index) => (
        <div
          key={index}
          className="flex-1 rounded-t-lg bg-primary/70"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}
