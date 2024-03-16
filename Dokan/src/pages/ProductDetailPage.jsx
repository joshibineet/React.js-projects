import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosPricetags } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const ProductDetailPage = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const  [currentImage, setCurrentImage] = useState(null);
  console.log(currentImage);
  const params = useParams();
const priceAfterDiscount = singleProduct.price -(singleProduct.price * singleProduct.discountPercentage) / 100;
const actualPrice = priceAfterDiscount.toFixed(0); 

const rating = singleProduct?.rating?.toFixed(0);
  useEffect(() => {
    async function getSingleProductDetails() {
      let response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      console.log(response);
      setSingleProduct(response.data);
    }
    getSingleProductDetails();
  }, [params.id]);

  useEffect(() => {
    setCurrentImage(singleProduct.thumbnail);
  }, [singleProduct.thumbnail]);
  
  return (
    <section>
      <div className="conatiner md:p-10 md:flex md:gap-10  ">
        <div className="w-1/2  md:flex md:justify-between">
          <div className="thumbnails w-1/4  flex flex-col gap-3">
            {singleProduct.images?.map((item, index) => (
              <img 
              key={index} 
              src={item} 
              onClick={() => setCurrentImage(item)}
              className="size-24 bg-gray-200 py-3 rounded-md"/>
             ))} 
          </div>
          <div className="imagewrapper md:ml-5 ">
            <img src={currentImage} className="h-full rounded-md" alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="details">
            <div className="rating flex gap-3 items-center  ">
              <FaStar className="text-yellow-400"/>
              <span>{singleProduct.rating}</span>
            </div>
            <h3 className="text-2xl font-bold">
              {singleProduct.title}{" "}
            <span className="text-sm bg-gray-400 px-3 py-1 rounded-md">{singleProduct.brand}</span>
            </h3>
            <div className="meta flex text-xl font-bold gap-5 my-4 items-center">
              <div className="item md:flex md:items-center gap-3 ">
                <IoIosPricetags />
                <span>$ {actualPrice}</span>
              </div>
              <div className="item line-through">{singleProduct.price}</div>
              <div className="item border-[1px] border-gray-400 rounded-md px-3 text-sm py-1">{singleProduct.category}</div>
            </div>
            <p>{singleProduct.description}</p>
            <div className="moreInfo text-green-500">
              {singleProduct.stock == 0 ? "Out of Stock" : "In Stock"}
            </div>

            <div className="buttons flex gap-5 items-center py-3">
               <button className="btn">Buy Now</button>
               <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
