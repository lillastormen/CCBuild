'use client'

import Image from "next/image";
import React, { useEffect,useState } from "react";
import ProductForm from "@/components/ProductForm";
import { useSearchParams } from 'next/navigation'
import { ProductObject } from "@/objects/ProductObject";

import { ProductController } from "@/controllers/productController";
import { ProductInventory } from "@/objects/ProductInventory";
import { useRouter } from "next/navigation";
import { Suspense } from 'react'


const CreateProductPage = () => {

  const router = useRouter();
  //using searchParams to get the id from the url
  const params = useSearchParams();
  const productId = params.get('id');

  //using setState to store dynamic info from the db and also controlling what we should show, if it's loading or not
  const [product, setProduct] = useState(ProductObject);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  
  const [inventory, setInventory] = useState(ProductInventory);
  const [loadingInventory, setLoadingInventory] = useState(true);
  //setting a step to 0
  const [step, setStep] = useState(0);

  //fetched the product from the db and setting it into the setProduct state
  async function getProduct() {
    const query = await ProductController.readOne(productId);
    setLoading(false);
    setProduct(query.data);
    console.log(query);
  }

  async function createProduct() {
    console.log(product)
    const query = await ProductController.create(product);
    setIsCreating(false);
    console.log(query.data);
    console.log(query.error)
    // router.push('/product/'+query.data)
  }

  //using useEffect to make sure that we only call the db if the id changes
  useEffect(() => {
    if(productId) getProduct();
    setLoading(true);
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isNumericField = ['projectId', 'projectNumber', 'width', 'height', 'depth', 'diameter', 'thickness'].includes(name);
    const isBooleanField = ['conditionVisual', 'conditionFunctional'].includes(name);
    
    setProduct({
        ...product, 
        [name]: isNumericField ? (value === '' ? null : parseInt(value, 10)) : 
        isBooleanField ? (value === 'true' ? true : false) : value
    });
};    

  //todo: create a producr component for a single component
  return (
    <div>
      <div className="mx-4 my-2 pb-4 border-b">
				<ul className="flex flex-row gap-2 items-center text-sm font-medium">
					<li>Översikt</li>
					<li>
						<Image 
							src='/icons/right_arrow.svg'
							width={16}
							height={16}
							alt="arrow"
						/>
					</li>
					<li>Projekt</li>
					<li>
						<Image 
							src='/icons/right_arrow.svg'
							width={16}
							height={16}
							alt="arrow"
						/>
					</li>
					<li>Grupp 5</li>
          <li>
						<Image 
							src='/icons/right_arrow.svg'
							width={16}
							height={16}
							alt="arrow"
						/>
					</li>
          <li>Skapa ny produkt</li>
				</ul>
			</div>
      <div className="flex mx-4">
				<div className="w-1/4 flex flex-col gap-3 mr-4 pt-6">
          <h1 className="text-[43px] text-zodiac font-poppins font-semibold">Ny produkt</h1>
          <div>
            <ul className="font-poppins flex flex-col gap-3 mx-2">
              <li>Generell information*</li>
              <li>Plats / Status / Antal*</li>
              <li>Egenskaper</li>
              <li>Produktinformation</li>
              <li>Hantering för marknadsplats</li>
            </ul>
          </div>
          <div className="flex flex-row gap-2 pt-4">
            <button className="flex flex-row gap-2 items-center font-semibold bg-bostonblue border rounded-full px-4 py-2 text-white text-sm">Spara</button>
            <button className="flex flex-row gap-2 items-center font-semibold bg-white border border-bostonblue rounded-full px-4 py-2 text-bostonblue text-sm">Avbryt</button>
          </div>
        </div>
        <div className="flex-grow flex flex-col pl-4 pt-4">
          <div>
            <h3 className="text-lg text-bostonblue font-bold">Steg {step+1} av 5</h3>
           
          </div>
          
          <div className="border-b">
          <Suspense>
            { productId && (
              !loading && (
                <>
                  <h1>{product.name}</h1>
                  <span>Manufacturer: {product.manufacturer}</span>
                </>
              ) || (
                <span>loading...</span>
              )
            ) || (
              <>
                <ProductForm 
                  step={step}
                  currentProduct={product}
                  currentInventory={inventory} 
                  handleChange={handleChange}
                />
              </>
            )}
            </Suspense>
          </div>
          <div className="flex flex-row justify-between pt-8">
            <button className="flex flex-row gap-2 items-center font-semibold bg-white border border-bostonblue rounded-full px-4 py-2 text-bostonblue text-sm" onClick={() => setStep(step-1)}>Föregående</button>
            <div className="flex flex-row gap-3">
              <button className="flex flex-row gap-2 items-center font-semibold bg-white border border-bostonblue rounded-full px-4 py-2 text-bostonblue text-sm" onClick={() => createProduct()}>Spara</button>
              <button className="flex flex-row gap-2 items-center font-semibold bg-bostonblue border rounded-full px-4 py-2 text-white text-sm" onClick={() => setStep(step+1)}>Nästa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;