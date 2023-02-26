import Head from 'next/head';
import Hero from '@components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Wiki</title>
        <meta name="description" content="Search your favorite cat breeds" />
      </Head>
      <main>
        <div className="container">
          <Hero />
        </div>
      </main>
    </>
  );
}
