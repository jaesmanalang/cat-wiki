import '../styles/globals.css';
import { Montserrat } from '@next/font/google';
import Header from '@components/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
});

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
      <Header />
      <Component {...pageProps} />
    </>
  );
}
