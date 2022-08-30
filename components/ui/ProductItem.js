import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

export default function ProductItem({product}) {
  return (
    <div className="bg-white flex flex-col gap-y-1  items-center text-center text-sm font-semibold p-3 relative">
      <button className="absolute top-3 bg-wihte right-3 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color">
        <AiOutlinePlus />
      </button>
      <img src={product.image} alt={product.title} />
      <div className=" text-brand-color">{product.price}</div>
      <div className=" text-gray-900">{product.title}</div>
      <div className=" text-gray-500">{product.alt}</div>
    </div>
  );
}
