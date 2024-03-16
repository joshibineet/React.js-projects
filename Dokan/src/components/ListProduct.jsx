import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import products from './../products.json';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      setLoading(false);
    } 
    getProducts();
  }, []);
  console.log(products);
  if (loading) {
  return (
    <section>
        <div className="container px-10 py-10">
          <h3 className="text-3xl text-darkblue font-bold uppercase mb-5">
            Featured Products
          </h3>
          <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                className="product skeleton shadow-xl p-3 flex gap-3"
                key={index}
              >
                <div className="image w-1/4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="info w-3/4 flex flex-col gap-2">
                  <h2 className="text-xl mb-3 bg-gray-300 rounded-md h-7 animate-pulse"></h2>
                  <p className="text-sm opacity-70 bg-gray-300 rounded-md h-5 animate-pulse"></p>
                  <p className="text-sm  opacity-70 bg-gray-300 rounded-md h-5 animate-pulse"></p>
                  <div className="mt-5">
                    <button className="btn bg-blue-500 text-white  px-3 py-1 text-sm rounded-sm animate-pulse">
                      Loading...
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
   return (
    <div className='py-4 '>
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
                 <button className="btn mt-5 px-3 py-2 text-sm  text-white rounded-md">
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
};

export default ListProduct;
