import {Campaings, Cards, Categories, Favorites, Footer, Header, HeroSection, MobileApp} from 'components';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Header />
      <HeroSection />
      <Categories />
      <Campaings />
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </div>
  );
}
