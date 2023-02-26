import Image from 'next/image';
import { Search, ArrowRight } from 'react-feather';

export default function Hero() {
  return (
    <section>
      <div className="lg:min-h-[538px] md:min-h-[340px] min-h-[147px] lg:py-20 py-5 rounded-t-[42px] relative flex items-center lg:bg-hero-cat-lg md:bg-hero-cat-md bg-hero-cat-sm bg-cover bg-no-repeat px-7">
        {/* <Image
                src="/HeroImagelg.png"
                className="object-cover absolute top-0 left-0"
                fill
              /> */}

        <div className="max-w-5xl h-full mx-auto grid lg:grid-cols-3 grid-cols-2 items-center relative w-full">
          <div>
            <div className="lg:h-[86px] h-[38px] relative">
              <Image
                className="brightness-0 invert object-contain object-left"
                src="/logo.svg"
                fill
                alt="Cat Wiki"
              />
            </div>
            <p className="mb-4 lg:mb-12 text-white text-xs lg:text-2xl font-medium">
              Get to know about your cat breed
            </p>
            <div className="relative">
              <input
                className="rounded-full w-full bg-white lg:py-5 lg:px-7 py-2 px-3 focus:outline-black text-xs lg:text-lg pr-7 lg:pr-14"
                placeholder="Search"
                type="text"
              />
              <button className="absolute top-1/2 -translate-y-1/2 lg:right-5 right-0 p-2 focus:outline-black">
                <Search size={18} />
              </button>
              <div className="absolute left-0 top-20 w-full bg-white rounded-3xl px-3 pr-[6px] py-2 hidden">
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

      <div className="pt-10 pb-24 bg-[#E3E1DC] px-7">
        <div className="max-w-5xl w-full mx-auto">
          <div className="relative py-2">
            <span className="font-medium md:text-lg text-xs">
              Most Searched Cat Breeds
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#4D270C] md:w-[60px] w-[41px]"></span>
          </div>

          <div className="flex items-end justify-between">
            <h4 className="md:text-5xl text-lg font-bold md:max-w-lg max-w-[185px] md:mt-9 mt-4 leading-relaxed">
              66+ Breeds for you to discover
            </h4>
            <span className="uppercase font-bold md:text-lg text-xs flex items-center text-[#29150799] shrink-0 leading-loose">
              See more <ArrowRight className="ml-2" size={18} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
