import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Rating from '@components/Rating';
import Spinner from '@components/Spinner';

function fetchCatImages(id) {
  return axios.get(`/api/cats/images/${id}`).then((res) => res.data);
}

export default function CatDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['catImages', id],
    queryFn: () => fetchCatImages(id),
  });

  const featuredCat = data?.length > 0 && data[0];
  const breed = data?.length > 0 && data[0].breeds[0];
  const otherPhotos = data?.filter(
    (catPhoto) => catPhoto.id !== featuredCat.id
  );

  if (isError) {
    return <div>An error has occurred. Please try again later.</div>;
  }

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh_-_97.5px)] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isLoading && !data?.length > 0) {
    return (
      <div>
        <h1 className="font-bold text-4xl">Cat not found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="grid lg:grid-cols-8 grid-cols-4 lg:gap-[115px] gap-10 mb-20">
        <div className="lg:col-span-3 sm:col-span-2 col-span-4">
          <div className="relative pb-[100%] w-full rounded-3xl">
            <Image
              className="rounded-[inherit] object-cover"
              src={featuredCat.url}
              priority
              fill
              sizes="(min-width: 1024px) 25vw,
                      (min-width: 768px) 50vw,
                      100vw"
              alt={breed.name}
            />
          </div>
        </div>
        <div className="col-span-4">
          <h2 className="font-semibold text-4xl mb-6 leading-snug">
            {breed.name}
          </h2>
          <div className="flex flex-col gap-8">
            <p className="lg:text-lg md:text-base text-sm font-medium mb-8">
              {breed.description}
            </p>
            <p className="md:text-base text-sm font-medium">
              <strong className="font-bold">Temperament:</strong>{' '}
              {breed.temperament}
            </p>
            <p className="md:text-base text-sm font-medium">
              <strong className="font-bold">Origin:</strong> {breed.origin}
            </p>
            <p className="md:text-base text-sm font-medium">
              <strong className="font-bold">Life Span:</strong>{' '}
              {breed.life_span} years
            </p>
            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Adaptability:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.adaptability} />
              </div>
            </div>

            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Affection level:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.affection_level} />
              </div>
            </div>

            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Child Friendly:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.child_friendly} />
              </div>
            </div>

            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Grooming:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.grooming} />
              </div>
            </div>

            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Intelligence:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.intelligence} />
              </div>
            </div>
            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Health issues:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.health_issues} />
              </div>
            </div>
            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Social needs:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.social_needs} />
              </div>
            </div>
            <div className="flex items-center justify-between md:gap-7 gap-4">
              <p className="md:w-[30%] w-[35%] md:text-base text-sm">
                <strong>Stranger friendly:</strong>
              </p>
              <div className="md:w-[70%] w-[65%]">
                <Rating rating={breed.stranger_friendly} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-4xl mb-10">Other photos</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-11 gap-4 mb-44">
        {otherPhotos.length > 0 &&
          otherPhotos.map((photo) => (
            <div key={photo.id} className="col-span-1">
              <div className="w-full pb-[100%] relative md:rounded-3xl rounded-xl">
                <Image
                  className="object-cover object-top rounded-[inherit]"
                  src={photo.url}
                  fill
                  sizes="(min-width: 1024px) 25vw,
                          (min-width: 768px) 33vw,
                          50vw"
                  alt={`Image of ${breed.name}`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
