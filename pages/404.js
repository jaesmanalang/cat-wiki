import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link href="/">
        <span className="underline text-black">Go back</span>
      </Link>
    </div>
  );
}
