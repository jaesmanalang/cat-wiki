export default function TextSkeleton({ className = '' }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse min-h-[24px] ${className}`}
      status="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
