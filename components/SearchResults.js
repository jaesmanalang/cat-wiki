import Spinner from './Spinner';
import Link from 'next/link';
import React from 'react';

export default function SearchResults({ data, isLoading }) {
  if (isLoading) {
    return (
      <div className="absolute left-0 top-20 w-full bg-white rounded-2xl px-3 pr-[6px] py-2 z-10">
        <div className="min-h-[3.75rem] flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute left-0 top-20 w-full bg-white rounded-2xl pr-[6px] py-3 z-10"
      tabIndex={-1}
    >
      <ul className="max-h-56 overflow-y-auto ">
        {data.length > 0 ? (
          data.map((result) => (
            <li key={result.id}>
              <Link
                href={`/cats/${result.id}`}
                className="px-6 py-2 text-lg block w-full hover:bg-gray-200"
              >
                <span>{result.name}</span>
              </Link>
            </li>
          ))
        ) : (
          <div className="text-lg px-6 py-4">No results found</div>
        )}
      </ul>
    </div>
  );
}
