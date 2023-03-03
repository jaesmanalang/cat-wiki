import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Rating from '@components/Rating';
import Spinner from '@components/Spinner';

function fetchCatDetails(id) {
  return axios.get(`/api/cats/${id}`).then((res) => res.data);
}

function fetchCatImages(id) {
  return axios.get(`/api/cats/images/${id}`).then((res) => res.data);
}

export default function CatDetails() {
  const router = useRouter();
  const { id } = router.query;

  // const catQuery = useQuery({
  //   queryKey: ['catDetails', id],
  //   queryFn: () => fetchCatDetails(id),
  // });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['catImages', id],
    queryFn: () => fetchCatImages(id),
  });

  const featuredCat = data?.length > 0 && data[1];
  const breed = data?.length > 0 && data[1].breeds[0];

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="grid lg:grid-cols-8 lg:gap-[115px] mb-20">
        <div className="col-span-3">
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
            <p className="lg:text-lg font-medium mb-8">{breed.description}</p>
            <p className="text-base font-medium">
              <strong>Temperament:</strong> {breed.temperament}
            </p>
            <p className="text-base font-medium">
              <strong>Origin:</strong> {breed.origin}
            </p>
            <p className="text-base font-medium">
              <strong>Life Span:</strong> {breed.life_span} years
            </p>
            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Adaptability:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.adaptability} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Affection level:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.affection_level} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Child Friendly:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.child_friendly} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Grooming:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.grooming} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Intelligence:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.intelligence} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Health issues:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.health_issues} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Social needs:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.social_needs} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-7">
              <p className="w-[30%]">
                <strong>Stranger friendly:</strong>
              </p>
              <div className="w-[70%]">
                <Rating rating={breed.stranger_friendly} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
