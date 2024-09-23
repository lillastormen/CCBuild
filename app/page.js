'use client'
import Image from "next/image";

import { Users } from "../controllers/apifunctionsTest";
import { UserController } from '../controllers/userController.js';
import { ProjectController } from '../controllers/projectController.js';
import { ProductController } from '../controllers/productController.js';
import React from "react";
import ProductForm from "@/components/ProductForm";

export default function Home() {
	(async () =>{
		let data = await UserController.test();		// Demo
		console.log('bob', data);
	})();

	(async () =>{
		console.log('ben', await ProductController.getAll());
		console.log('bin', await ProductController.get(1));
	})();
	
	// Users();

	function testAddProduct(e){
		e.preventDefault();
		ProductController.add(new FormData(e.target));
	}

	return(
		<div>
			<form onSubmit={(e) => testAddProduct(e)}>
				<input type="text" name="test"/>
				<input type="text" name="tester"/>
				<input type="text" name="testest"/>
				<input type="checkbox" name="testbox"/>
				<button type="submit">test</button>
			</form>
		</div>
	);
}