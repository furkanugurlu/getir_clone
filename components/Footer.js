import React from 'react';
import Menu from './ui/Menu';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {BiGlobe} from 'react-icons/bi';

function Footer() {
  const menus = [
    {title: "Getir'i keşfedin", items: [{title: 'Hakkımızda'}, {title: 'Kariyer'}, {title: 'Teknoloji Kariyerleri'}, {title: 'İletişim'}]},
    {title: 'Yardıma mı ihtiyacınız var?', items: [{title: 'Hakkımızda'}, {title: 'Kariyer'}, {title: 'Teknoloji Kariyerleri'}, {title: 'İletişim'}]},
    {title: 'İş Ortağımız Olun', items: [{title: 'Hakkımızda'}, {title: 'Kariyer'}, {title: 'Teknoloji Kariyerleri'}, {title: 'İletişim'}]},
  ];
  return (
    <div className="bg-white mt-16 py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <section>
            <h6 className="text-lg text-primary-brand-color">Getir'i indir</h6>
            <nav className="grid gap-y-4 mt-4 ">
              <a href="">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-xs text-grau-700 flex gap-x-8">
            &copy; 2022 Getir
            <a href="">Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className="flex gap-x-3 ">
            <a href="" className="w-8 h-8 rounded-lg textgray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color transition-all">
              <FaFacebook size={21} />
            </a>
            <a href="" className="w-8 h-8 rounded-lg textgray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color transition-all">
              <FaTwitter size={21} />
            </a>
            <a href="" className="w-8 h-8 rounded-lg textgray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color transition-all">
              <FaInstagram size={21} />
            </a>
            <a
              href=""
              className="h-8 flex items-center px-2 gap-x-2 rounded-lg text-gray-500 border text-xs hover:border-transparent border-gray-100  hover:text-primary-brand-color transition-all hover:bg-primary-brand-color hover:bg-opacity-10 ">
              <BiGlobe size={18} />
              Türkçe(TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
