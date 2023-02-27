import '../styles/globals.css';
import { Montserrat } from '@next/font/google';
import Header from '@components/Header';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
