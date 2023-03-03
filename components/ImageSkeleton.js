export default function ImageSkeleton() {
  return (
    <div className="bg-gray-200 animate-pulse rounded-[inherit] absolute w-full h-full">
      <span className="sr-only">loading...</span>
    </div>
  );
}
