import { useQuery } from '@tanstack/react-query';
import CatPhoto from '@components/CatPhoto';
import axios from 'axios';
import Link from 'next/link';

export default function FeaturedCats() {
  const { data, isLoading, isError } = useQuery(['featuredBreeds'], () =>
    axios.get('/api/cats?limit=4')
  );

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-12 md:gap-8 grid-cols-2 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} role="status">
            <div className="w-full pb-[100%] relative rounded-3xl bg-gray-400 animate-pulse" />
            <div className="w-1/2 md:h-7 h-[22px] bg-gray-400 animate-pulse mt-5 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="my-4">An error has occurred. Please try again later.</div>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 lg:gap-12 md:gap-8 grid-cols-2 gap-4">
      {data?.data.map((breed) => (
        <Link href={`/cats/${breed.id}`} key={breed.id}>
          <CatPhoto name={breed.name} imageSrc={breed.image?.url} />
        </Link>
      ))}
    </div>
  );
}
