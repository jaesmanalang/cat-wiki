import Image from 'next/image';

export default function CatPhoto({ name, imageSrc }) {
  if (!imageSrc || !name) {
    return null;
  }

  return (
    <div>
      <div className="pb-[100%] w-full relative overflow-hidden rounded-3xl">
        <Image
          src={imageSrc}
          className="object-cover"
          fill
          sizes="100vw, (min-width: 768px) 50vw, (min-width: 1024px) 25vw"
          alt={name}
        />
      </div>

      <h4 className="md:mt-5 mt-3 font-semibold md:text-lg text-xs">{name}</h4>
    </div>
  );
}
