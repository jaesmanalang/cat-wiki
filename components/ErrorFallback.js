export default function ErrorFallback({ error }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Oops, something went wrong....
      </h1>
      <p>{error.message}</p>
    </div>
  );
}
