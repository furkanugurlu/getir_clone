import React from 'react';
import Category from './ui/Category';

function Categories() {
  const [categoris, setCategoris] = React.useState([]);
  const categoriesResponse = async () => {
    const response = await fetch('http://localhost:3000/api/categories');
    const res = await response.json();
    return res;
  };
  React.useEffect(() => {
    categoriesResponse().then(res => {
      setCategoris(res);
    });
  }, []);

  console.log(categoris);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
          {categoris.length == 0 && 'Yükleniyor... '}
          {categoris && categoris.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>
    </div>
  );
}

export default Categories;
