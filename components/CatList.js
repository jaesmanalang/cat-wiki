import { useQuery } from '@tanstack/react-query';
import CatPhoto from '@components/CatPhoto';
import axios from 'axios';
import Link from 'next/link';

async function fetchCats() {
  const { data } = await axios.get('/api/cats');
  return data;
}

export default function CatList() {
  const { data, isLoading, isError } = useQuery(['cats'], fetchCats);

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-12 md:gap-8 grid-cols-2 gap-4">
        {Array.from({ length: 24 }, (_, i) => (
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
      <div>
        <h1>An error has occured...</h1>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 lg:gap-12 md:gap-8 grid-cols-2 gap-4">
      {data?.map((breed) => (
        <Link href={`/cats/${breed.id}`} key={breed.id}>
          <CatPhoto name={breed.name} imageSrc={breed.image?.url} />
        </Link>
      ))}
    </div>
  );
}
