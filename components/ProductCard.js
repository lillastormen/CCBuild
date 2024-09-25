import Image from "next/image"
import React from "react"


export default function ProductCard( { product }) {
    
    console.log(product);
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
                        <p></p>
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