import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'react-feather';
import axios from 'axios';
import useDebounce from '@hooks/useDebounce';
import SearchResults from './SearchResults';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);

  const fetchSearchResults = async () => {
    if (debouncedQuery) {
      const { data } = await axios.get(
        `/api/cats/search?searchQuery=${debouncedQuery}`
      );
      return data;
    } else {
      return [];
    }
  };

  const { data, isLoading, isError } = useQuery(
    ['search', debouncedQuery],
    fetchSearchResults
  );

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleBlur = (event) => {
    if (event.relatedTarget !== null) {
      return;
    }

    setInputFocused(false);
  };

  return (
    <div className="relative">
      <form>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full w-full bg-white lg:py-5 lg:px-7 py-2 px-3 focus:outline-black text-xs lg:text-lg pr-7 lg:pr-14"
          placeholder="Search"
          type="text"
          onFocus={(e) => setInputFocused(true)}
          onBlur={handleBlur}
        />
        <button className="absolute top-1/2 -translate-y-1/2 lg:right-5 right-0 p-2 focus:outline-black">
          <Search size={18} />
        </button>
      </form>
      {debouncedQuery && inputFocused && (
        <SearchResults data={data} isLoading={isLoading} />
      )}
    </div>
  );
}
