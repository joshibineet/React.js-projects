import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const ProductDetailPage = () => {
  const params = useParams();
const[singleProduct, setSingleProduct] = useState([]);
useEffect(()=> {
  async  function getSingleProductDetails() {
    let response = await axios.get(`https://dummyjson.com/products/${params.id}`);
    console.log(response);
    setSingleProduct(response.data);
  }
  getSingleProductDetails();
}, [params.id]);
  console.log(params);
  return(
    <div> 
    The product ID received from Product List is{" "}
     <span>{params.id}</span>
     <span>{singleProduct.title}</span>
  </div>
  );
};

export default ProductDetailPage;
