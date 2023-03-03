import '../styles/globals.css';
import { Montserrat } from '@next/font/google';
import Layout from '@components/Layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorFallback';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cat Wiki</title>
        <meta name="description" content="Search your favorite cat breeds" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
