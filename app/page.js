'use client'
import Image from "next/image";

import { Users } from "../controllers/apifunctionsTest";
import { UserController } from '../controllers/userController.js';
import { ProjectController } from '../controllers/projectController.js';
import { ProductController } from '../controllers/productController.js';
import React, { useEffect, useState }from "react";
import ProductCard from "@/components/ProductCard";


export default function HomePage() {

	const [project, setProject] = useState();
	const [products, setProducts] = useState([]);
    const [loadingProject, setLoadingProject] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(true);
  
    //fetching the product from the db and setting it into the setProduct state
    async function getProject() {
      const projectQuery = await ProjectController.get(1); //hardcoding the id for now
      setLoadingProject(false);
      setProject(projectQuery.data);
    }
  
    //using useEffect to make sure that we only call the db if the id changes
    useEffect(() => {
      if (!project) getProject();
      setLoadingProject(true);
    }, []);    
	
	async function getProducts() {
		const query = await ProductController.getAllFrom(project.id); //hardcoding the id for now
		setLoadingProducts(false);
		setProducts(query.data);
		console.log(query.data)
	}

	useEffect(() => {
		if (!loadingProject) getProducts();
		setLoadingProducts(true);
	}, [loadingProject]);


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
				</ul>
			</div>
			<div>
				<div className="bg-zodiac h-[22rem] flex flex-col justify-end rounded mx-4 my-6 relative">
					<div>
						<button className="absolute top-8 right-28 flex flex-row items-center gap-2 text-xs text-white font-bold border border-white rounded-full px-5 py-3">
							<Image 
								src='/icons/image.svg'
								width={16}
								height={16}
								alt="image"
							/> 
							REDIGERA BILD
						</button>
					</div>
					<div className="flex justify-between w-full items-end">
						<div className="flex flex-col text-white ml-7 pb-6">
							<h1 className="font-poppins text-5xl pb-2">Grupp 5</h1>
							<h3 className="font-poppins text-lg">Yrgo</h3>
						</div>
						<ul className="flex space-x-4 text-xs text-white font-bold mr-28 pb-6">
							<li>
								<button className="flex flex-row gap-3 items-center border border-white rounded-full px-5 py-3 hover:bg-white hover:text-bostonblue hover:border-bostonblue transition-colors duration-300">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									width="16" 
									height="16" 
									fill="currentColor"  // Allows the color to be controlled by the text color
									viewBox="0 0 16 16"
									className="hover:text-[bostonblue]">
									<path d="M8 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8.5v2.5a.5.5 0 0 1-1 0V8H5a.5.5 0 0 1 0-1h2.5V4.5A.5.5 0 0 1 8 4z"/>
								</svg>
									LÄGG TILL PRODUKT
								</button>
							</li>
							<li>
								<button className="border border-white rounded-full px-5 py-3">
									DUPLICERA PROJEKT
								</button>
							</li>
							<li>
								<button className="border border-white rounded-full px-5 py-3">
									IMPORTERA
								</button>
							</li>
							<li>
								<button className="flex flex-row gap-3 items-center border border-white rounded-full px-5 py-3">
									VISA RAPPORT
									<Image 
										src='/icons/arrow_white.svg'
										width={16}
										height={16}
										alt="arrow"
									/>
								</button>
							</li>
							<li>
								<button className="flex flex-row gap-3 items-center border border-white rounded-full px-5 py-3">
									LÄGG TILL PRODUKT
									<Image 
										src='/icons/arrow_white.svg'
										width={16}
										height={16}
										alt="arrow"
									/>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<ul className="flex flex-row gap-4 items-center border-b font-bold text-sm text-zodiac mx-4 pt-4 pb-4">
					<li className="text-codgray underline decoration-4 underline-offset-6">PRODUKTER</li>
					<li>PROJEKINFORMATION</li>
					<li>PLANTRING</li>
					<li>ANVÄNDARE</li>
					<li>REVISIONSHISTORIK</li>
				</ul>
			</div>
			<div className="flex mx-4">
				<div className="w-1/4 flex flex-col gap-3 mr-4 pt-6">
					<h3 className="text-codgrey text-xl">Filter</h3>
					<div className="bg-lightblue w-full h-[52px]"></div>
					<div className="pb-4 pt-4">
						<h4 className="pb-3">Fritext</h4>
						<div className="border w-full h-[32px] text-geyser flex items-center pl-1">Produktnamn, mm...</div>
					</div>
					<div className="pb-4">
						<h4 className="pb-3">Märkning</h4>
						<div className="border w-full h-[32px] text-geyser flex items-center pl-1">Alla</div>
					</div>
					<div className="pb-4">
						<h4 className="pb-3">Inventeringstatus</h4>
						<div className="border w-full h-[32px] text-geyser flex items-center justify-between pl-1">
							<h3>Välj...</h3>
							<Image 
								src="/icons/arrow_dow_grey.svg"
								width={16}
								height={16}
								alt="arrowgrey"
							/>
						</div>
					</div>
					<div className="pb-4">
						<h4 className="pb-3">Markandsplatstatus</h4>
						<div className="border w-full h-[32px] text-geyser flex items-center justify-between pl-1">
						<h3>Välj...</h3>
							<Image 
								src="/icons/arrow_dow_grey.svg"
								width={16}
								height={16}
								alt="arrowgrey"
							/>
						</div>
					</div>
					<div>
						<h4 className="pb-3">Produktinformation</h4>
						<Image 
							src="/images/scale.png"
							width={360}
							height={83}
							alr="scale_placeholder"
						/>
					</div>
					<div className="pt-2">
						<h4 className="pb-3">Estetiskt skick</h4>
						<Image 
							src="/images/scale.png"
							width={360}
							height={83}
							alr="scale_placeholder"
						/>
					</div>
					<div className="pt-2">
						<h4 className="pb-3">Funktionellt skick</h4>
						<Image 
							src="/images/scale.png"
							width={360}
							height={83}
							alr="scale_placeholder"
						/>
					</div>
				</div>
				<div className="flex-grow flex flex-col border-l pl-4 pt-4">
					<div className="flex flex-row gap-3">
						<p>tag</p>
						<p>tag</p>
						<p>tag</p>
					</div>
					<div className="bg-athensgrey w-full h-16">
					
					</div>
					<div className="grid grid-cols-3 gap-4 pt-4">
						{
							loadingProducts && 
								<span>Loading...</span>
							||
							products.map((product) => {
								return <div><ProductCard product={product} /></div>
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}