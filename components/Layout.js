import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container lg:min-h-[calc(100vh_-_190px)] md:min-h-[calc(100vh_-_230px)] min-h-[calc(100vh_-_254px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
