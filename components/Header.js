import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="container">
        <Link href="/">
          <Image src="/logo.svg" width={128} height={43} alt="Cat Wiki" />
        </Link>
      </div>
    </header>
  );
}
