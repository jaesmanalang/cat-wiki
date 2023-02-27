import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Hero from '@components/Hero';
import MainWrapper from '@components/MainWrapper';
import WhyOwnCats from '@components/WhyOwnCats';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Wiki</title>
        <meta name="description" content="Search your favorite cat breeds" />
      </Head>
      <MainWrapper>
        <Hero />
        <WhyOwnCats />
      </MainWrapper>
      <Footer />
    </>
  );
}
