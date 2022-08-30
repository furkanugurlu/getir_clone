import React from 'react';
import ProductItem from './ui/ProductItem';

function Favorites() {
  const [products, setProducts] = React.useState([]);
  const productsResponse = async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const res = await response.json();
    return res;
  };
  React.useEffect(() => {
    productsResponse().then(res => {
      setProducts(res);
    });
  }, []);
  return (
    <div className="container mx-auto ">
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">{products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}</div>
    </div>
  );
}

export default Favorites;
