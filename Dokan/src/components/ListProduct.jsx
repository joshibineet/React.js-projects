import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import products from './../products.json';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } 
    getProducts();
  }, []);
  return (
    <div className='py-4'>
      <h3 className='font-semibold text-2xl ml-10 tracking-wide text-[#0097a7]'>Featured Product</h3>
      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  m-8 ">
            {products?.map((item) => (
              <div className="product shadow-xl p-3 flex gap-3 h-48 rounded-xl transition-transform duration-300  hover:scale-105" key={item.id}>
                <div className="image w-1/4">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-32 object-cover rounded-md"
                  />
                </div>
                <div className="info w-3/4">
                  <h2 className="text-xl">{item.title}</h2>
                  <p className="text-sm opacity-70">{item.description}</p>

                 <Link to={`/${item.id}`}>
                 <button className="btn mt-5 px-3 py-2 text-sm bg-blue-500 text-white rounded-md">
                      Read More
                    </button>
                 </Link>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default ListProduct;
