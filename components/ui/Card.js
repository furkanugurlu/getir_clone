import React from 'react';

export default function Card({card: {image, title, des}}) {
  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center text-center py-12">
      <img src={image} />
      <h3 className="text-primary-brand-color text-xl mt-6 font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{des}</p>
    </div>
  );
}
