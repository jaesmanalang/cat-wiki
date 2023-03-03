export default function Rating({ rating }) {
  const MAX_RATING = 5;
  const activeMeters = Array.from({ length: rating }, (_, i) => i + 1);

  return (
    <div className="flex items-center md:gap-2 gap-1.5 w-full">
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <div
          key={i + 1}
          className={`md:h-3 h-2 w-1/5 rounded-full ${
            activeMeters.includes(i + 1) ? 'bg-[#544439]' : 'bg-[#E0E0E0]'
          }`}
          role="presentation"
        />
      ))}
    </div>
  );
}
