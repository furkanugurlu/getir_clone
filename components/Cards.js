import React from 'react';
import Card from './ui/Card';

function Cards() {
  const cards = [
    {
      id: 1,
      image: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
      title: 'Her siparişinize bir kampanya,',
      des: 'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
    },
    {
      id: 1,
      image: 'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
      title: 'Dakikalar içinde kapınızda',
      des: 'Getir’le siparişiniz dakikalar içinde kapınıza gelir.',
    },
    {
      id: 1,
      image: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
      title: 'Binlerce çeşit mutluluk',
      des: 'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.',
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-3 gap-x-10">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
