import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Hero from '@components/Hero';
import WhyOwnCats from '@components/WhyOwnCats';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Wiki</title>
        <meta name="description" content="Search your favorite cat breeds" />
      </Head>
      <Hero />
      <WhyOwnCats />
    </>
  );
}
