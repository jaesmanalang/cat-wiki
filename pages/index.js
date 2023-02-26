import Head from 'next/head';
import Image from 'next/image';
import { Search } from 'react-feather';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Wiki</title>
        <meta name="description" content="Search your favorite cat breeds" />
      </Head>
      <main>
        <div className="container">
          <section>
            <div className="min-h-[538px] py-20 rounded-t-[42px] relative flex items-center bg-hero-cat bg-cover bg-no-repeat">
              {/* <Image
                src="/HeroImagelg.png"
                className="object-cover absolute top-0 left-0"
                fill
              /> */}

              <div className="max-w-5xl h-full mx-auto grid grid-cols-3 items-center relative w-full">
                <div>
                  <Image
                    className="brightness-0 invert"
                    src="/logo.svg"
                    width={256}
                    height={86}
                    alt="Cat Wiki"
                  />
                  <p className="mb-4 lg:mb-12 text-white">
                    Get to know about your cat breed
                  </p>
                  <div className="relative">
                    <input
                      className="rounded-full w-full bg-white py-5 px-7 focus:outline-black"
                      placeholder="Enter your breed"
                      type="text"
                    />
                    <button className="absolute top-1/2 -translate-y-1/2 right-5 p-2 focus:outline-black">
                      <Search size={18} />
                    </button>
                    <div className="absolute left-0 top-20 w-full bg-white rounded-3xl pl-3 pr-[6px] py-2">
                      <ul className="max-h-56 overflow-y-auto ">
                        <li className="px-2 py-4 text-lg">American bobcat</li>
                        <li className="px-2 py-4 text-lg">American bobcat</li>
                        <li className="px-2 py-4 text-lg">American bobcat</li>
                        <li className="px-2 py-4 text-lg">American bobcat</li>
                        <li className="px-2 py-4 text-lg">American bobcat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 pb-24 bg-[#E3E1DC]">
              <div className="max-w-5xl w-full mx-auto">
                <div>Most Searched Cat Breeds</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
