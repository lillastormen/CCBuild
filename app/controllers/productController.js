import { supabase } from '../db/dbConnection.js';

export const ProductController = {
	create: async (newProduct) => {
		console.log(newProduct , "asdasd");
		const { data, error } = await supabase
			.from('Product')  
			.insert([newProduct]);  
	
		if (error) {
			console.error('Error creating product:', error.message);  // More detailed error message
			return { success: false, error };
		}
	
		return { success: true, data };
	},

	add: async (product) =>{
		console.log(product)

		let data = {testbox: false};

		for (const entry of product.entries()){
			console.log(entry)
			if (['testbox'].includes(entry[0]))
				data.testbox = true;
			else
				data[entry[0]] = entry[1];
		}
		console.log(data)
		return;		// Prevent add to db

		let res = await supabase
			.from('Product')
			.insert(data);

		return res;

		// name, projectId, conditionVisual, conditionFunctional, picture, projectNumber, description, material, color, measurementsUnit, width, height, depth, diameter, thickness, manufacturer, yearOfManufacture, articleNumber, yearOfPurchase, GTIN, RSK, ENR, BSAB, BK04
	},

	getAll: async () =>{
		let res = await supabase
			.from('Project')
			.select('*');
		return res;
	},

	get: async (id) =>{
		let res = await supabase
			.from('Project')
			.select('*')
			.eq('id', id);
		return res;
	},

	update: async () =>{

	},

	delete: async () =>{

	}
};