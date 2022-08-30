import React from 'react';
import Slider from 'react-slick';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function NextBtn({className, onClick}) {
  return (
    <button className="text-brand-color absolute top-1/2 -right-6  -translate-y-1/2" onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({className, onClick}) {
  return (
    <button className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaings() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  const [banners, setBanners] = React.useState([]);
  const bannersResponse = async () => {
    const response = await fetch('http://localhost:3000/api/banner');
    const res = await response.json();
    return res;
  };
  React.useEffect(() => {
    bannersResponse().then(res => {
      setBanners(res);
    });
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h3 className="text-sm font-semibold my-3">Kampanyalar</h3>
      <Slider {...settings} className="-mx-2">
        {banners.map((banner, index) => {
          return (
            <div key={index} className="px-2 block">
              <img className="rounded-lg " src={banner.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Campaings;
