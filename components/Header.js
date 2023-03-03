import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="container">
        <Link href="/" scroll={false}>
          <div className="relative inline-block">
            <Image
              src="/logo.svg"
              priority={true}
              width={128}
              height={43}
              alt="Cat Wiki"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
