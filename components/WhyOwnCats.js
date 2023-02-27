import Image from 'next/image';
import { ArrowRight } from 'react-feather';

export default function WhyOwnCats() {
  return (
    <section className="py-24 my-1">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 col-span-12">
            <h2 className="md:text-5xl text-[2.5rem] leading-tight mb-10 font-bold relative">
              <span className="absolute -top-4 left-0 h-[3px] rounded-full bg-[#4D270C] md:w-[60px] w-[41px]" />
              Why should you have a cat?
            </h2>
            <p className="text-lg mb-11">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </p>
            <span className="uppercase font-bold md:text-lg text-xs flex items-center text-[#29150799] shrink-0 leading-loose">
              Read More <ArrowRight className="ml-2" size={18} />
            </span>
          </div>

          <div className="lg:col-span-6 col-span-12 grid grid-cols-2 gap-7">
            <div className="flex flex-col items-end gap-7">
              <div className="relative pb-[62%] w-full rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src="/why-1.png"
                  alt="Fluffy cat"
                  fill
                />
              </div>

              <div className="relative pb-[126%] w-[78%] rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src="/why-2.png"
                  alt="Fluffy cat"
                  fill
                />
              </div>
            </div>
            <div>
              <div className="relative pb-[162%] w-full rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src="/why-3.png"
                  alt="Fluffy cat"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
