import { ArrowRight } from 'react-feather';
import Image from 'next/image';
import FeaturedCats from './FeaturedCats';
import SearchForm from './SearchForm';
import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <div className="lg:min-h-[538px] md:min-h-[340px] min-h-[147px] lg:py-20 py-5 rounded-t-[42px] relative flex items-center lg:bg-hero-cat-lg md:bg-hero-cat-md bg-hero-cat-sm bg-cover bg-no-repeat px-7">
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
            <SearchForm />
          </div>
        </div>
      </div>

      <div className="pt-10 pb-24 bg-[#E3E1DC] lg:px-7 px-3 rounded-b-[42px]">
        <div className="max-w-5xl w-full mx-auto">
          <div className="relative py-2">
            <span className="font-medium md:text-lg text-xs">
              Most Searched Cat Breeds
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#4D270C] md:w-[60px] w-[41px]"></span>
          </div>

          <div className="flex items-end justify-between mb-12">
            <h4 className="md:text-5xl text-lg font-bold md:max-w-lg max-w-[185px] md:mt-9 mt-4 leading-relaxed">
              66+ Breeds for you to discover
            </h4>
            <Link href="/cats">
              <span className="uppercase font-bold md:text-lg text-xs flex items-center text-[#29150799] shrink-0 leading-loose">
                See more <ArrowRight className="ml-2" size={18} />
              </span>
            </Link>
          </div>

          <FeaturedCats />
        </div>
      </div>
    </section>
  );
}
