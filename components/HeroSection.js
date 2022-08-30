import React from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import {FaFacebook} from 'react-icons/fa';

function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };
  const [selected, setSelected] = React.useState('TR');
  const phone = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
  };

  return (
    <div className="relative before:bg-gradient-to-r h-[544px]  before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:z-10">
      <Slider {...settings}>
        <div>
          <img className="w-full  h-[544px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
        </div>
        <div>
          <img className="w-full   h-[544px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
        </div>
        <div>
          <img className="w-full  h-[544px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar <br /> içinde kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6 ">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect className="flag-select" selected={selected} customLabels={phone} placeholder={''} countries={Object.keys(phone)} onSelect={code => setSelected(code)} />
              <label className="flex-1 relative bloac">
                <input
                  required
                  type="text"
                  className="h-14 border-2 px-4 border-gray-200 rounded w-full bg-white transition-colors hover:border-brand-color focus:border-brand-color outline-none peer text-sm pt-2"
                />
                <span className="absolute top-0  px-4 left-0 h-full flex items-center text-sm text-gray-500 transition-all peer-focus:h-7  peer-focus:text-primary-brand-color peer-focus:text-xs  peer-valid:h-7  peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarsı
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12  flex items-center rounded-md w-full justify-center text-sm font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
              Telefon numarsı ile devam et
            </button>
            <hr className="h-[1px] bggray300 my-2" />
            <button className="bg-gray-100 h-12 px-4   flex items-center rounded-md w-full justify-center text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-700 hover:text-white">
              <FaFacebook size={24} />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
