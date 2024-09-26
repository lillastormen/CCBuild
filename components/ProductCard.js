import Image from "next/image"
import React, { useEffect, useState } from "react"
import { ProductController } from '../controllers/productController.js';


export default function ProductCard( { product }) {
    
    
	const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    //fetching the product from the db and setting it into the setProduct state
    async function getCategories() {
        const categoryQuery = await ProductController.getCategoryById(product.categoryId); //hardcoding the id for now
        setLoading(false);
        setCategories(categoryQuery.data);
        console.log(categoryQuery)
    }
    
        //using useEffect to make sure that we only call the db if the id changes
    useEffect(() => {
        getCategories();
        setLoading(true);
    }, [product.id]);  

    return (
        
        <div className="border-x border-b rounded border-athensgrey">
            <div className="pt-3 pb-3">
                <Image 
                    src="/images/product_image_placeholder.jpeg"
                    width={360}
                    height={100}
                    alt="product_image"
                    className="w-full"
                />
            </div>
            <div>
                Category
            </div>
            <div>
                <h4 className="font-bold pt-6">{product.name}</h4>
                <div className="flex flex-row justify-between gap-6">
                    <div className="text-sm flex flex-col gap-2">
                        <p>CCBuild Nr.</p>
                        <p>Produktinformation</p>
                        <p>Estetiskt skick</p>
                        <p>Funktionellt skick</p>
                        <p>Datum tillgänglig</p>
                        <p>Total antal</p>
                        <p>Total klimatbesparing</p>
                        <p>Total mängd</p>
                    </div>
                    <div className="text-sm flex flex-col gap-2 text-right pr-4">
                        <p>{product.projectNumber}</p>
                        <p>{product.description}</p>
                        <p>{product.conditionVisual}</p>
                        <p>{product.conditionFunctional}</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row gap-2 justify-center pt-6 pb-8">
                <button className="bg-loblolly text-white text-[10px] border-2 rounded-lg border-white px-4 py-2 w-32">EJ PUBLICERAD</button>
                <button className="bg-zodiac text-white text-[10px] border-2 rounded-lg border-white px-4 py-2 w-32">INVENTERAD</button>
            </div>
            </div>
    
    )
}