import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="container">
      <footer className="bg-black rounded-t-[42px] py-7 text-white min-h-[4rem] md:px-7 px-4">
        <div className="max-w-5xl mx-auto w-full flex lg:flex-row flex-col lg:items-center items-start lg:justify-between gap-4">
          <Image
            className="brightness-0 invert"
            src="/logo.svg"
            width={128}
            height={43}
            alt="Cat Wiki"
            priority
          />

          <p>
            &copy; created by{' '}
            <Link href="http://github.com/jaesmanalang" target="_blank">
              James Manalang
            </Link>{' '}
            - devChallenges.io 2023
          </p>
        </div>
      </footer>
    </div>
  );
}
