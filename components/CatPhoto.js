import Image from 'next/image';

export default function CatPhoto({ name, imageSrc }) {
  // if (!imageSrc || !name) {
  //   return null;
  // }

  return (
    <div>
      <div className="pb-[100%] w-full relative lg:rounded-3xl rounded-xl">
        {imageSrc ? (
          <Image
            src={imageSrc}
            className="object-cover object-top rounded-[inherit]"
            fill
            sizes="100vw, (min-width: 768px) 50vw, (min-width: 1024px) 25vw"
            alt={name}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-400 rounded-[inherit] flex items-center justify-center text-sm">
            No image available
          </div>
        )}
      </div>

      <h4 className="md:mt-5 mt-3 font-semibold md:text-lg text-xs">{name}</h4>
    </div>
  );
}
