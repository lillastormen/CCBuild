'use client'

import Image from "next/image";
import React, { useEffect,useState } from "react";
import ProductForm from "@/components/ProductForm";
import { useSearchParams } from 'next/navigation'
import { ProductObject } from "@/objects/ProductObject";

import { ProductController } from "@/controllers/productController";


const CreateProductPage = () => {

  //using searchParams to get the id from the url
  const params = useSearchParams();
  const productId = params.get('id');

  //using setState to store dynamic info from the db and also controlling what we should show, if it's loading or not
  const [product, setProduct] = useState(ProductObject);
  const [loading, setLoading] = useState(true);

  //fetched the product from the db and setting it into the setProduct state
  async function getProduct() {
    const query = await ProductController.readOne(productId);
    setLoading(false);
    setProduct(query.data);
    console.log(query);
  }

  //using useEffect to make sure that we only call the db if the id changes
  useEffect(() => {
    if(productId) getProduct();
    setLoading(true);
  }, [productId]);


  //todo: create a producr component for a single component
  return (
    <div>
      { productId && (
        !loading && (
          <>
            <h1>{product.name}</h1>
            <span>manufacture: {product.manufacturer}</span>
          </>
        ) || (
          <span>loading...</span>
        )
      ) || (
        <>
          <h1>Add New Product</h1>
          <ProductForm />
        </>
      )}
    </div>
  );
};

export default CreateProductPage;