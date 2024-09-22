'use client'
import Image from "next/image";

import { Users } from "./controllers/apifunctionsTest";
import { UserController } from './controllers/userController.js';
import { ProjectController } from './controllers/projectController.js';
import { ProductController } from './controllers/productController.js';
import React from "react";
import ProductForm from "@/components/ProductForm";

export default async function Home() {
	(async () =>{
		let data = await UserController.test();		// Demo
		console.log('bob', data);
	})();
	
	Users();

}
	
