import { supabase } from '../db/dbConnection.js';

export const ProductController = {
    create: async (newProduct) => {
		console.log(newProduct);
        const { data, error } = await supabase
          .from('Product')  
          .insert([newProduct]);  
    
        if (error) {
            console.error('Error creating product:', error.message);  // More detailed error message
            return { success: false, error };
        }
    
        return { success: true, data };
      },

    readOne: async (productId) => {
      const {data, error } = await supabase
      .from('Product')
      .select()
      .eq('id', productId)
      .maybeSingle()

      if (error) {
        console.error('Error creating product:', error.message);  // More detailed error message
        return { success: false, error };
    }

    return { success: true, data };
  },


	add: async (product) =>{
		let data = {};
		let marketData = {allowBuyerToProposePrice: false, canBePickedUpOnSite: false, canBeDelivered: false};
		let inventoryData = {};
		let propData = [];

		for (const entry of product.entries()){
			if (entry[0][0] == '0') propData.push({propertyId: +[entry[0]], value: entry[1]});
			else if (entry[0][0] == '1'){
				if (['1allowBuyerToProposePrice', '1canBePickedUpOnSite', '1canBeDelivered'].includes(entry[0])) marketData[entry[0].substring(1)] = true;
				else marketData[entry[0].substring(1)] = entry[1];
			}
			else if (entry[0][0] == '2') inventoryData[entry[0].substring(1)] = entry[1];
			else data[entry[0]] = entry[1];
		}

		let res = await supabase
			.from('Product')
			.insert(data)
			.select();

		if (res.error) return res;

		propData.forEach((e) =>{
			e.productId = res.data[0].id;
		});

		marketData.productId = res.data[0].id;
		inventoryData.productId = res.data[0].id;

		supabase
			.from('Product_properties')
			.insert(propData);

		supabase
			.from('Product_marketplace')
			.insert(marketData);

		supabase
			.from('Product_inventory')
			.insert(inventoryData);

		return res;
	},

	getAll: async () =>{
		let res = await supabase
			.from('Product')
			.select('*');

		if (res.error) return res;

		for (let i = 0; i < res.data.length; i++){
			res.data[i].properties = (await supabase
				.from('Product_properties')
				.select('*')
				.eq('productId', res.data[i].id)).data;

			let market = (await supabase
				.from('Product_marketplace')
				.select('*')
				.eq('productId', res.data[i].id)).data;

			res.data[i].marketplace = market ? market[0] : null;

			res.data[i].inventory = (await supabase
				.from('Product_inventory')
				.select('*')
				.eq('productId', res.data[i].id)).data[0];
		}
		return res;
	},

	getAllFrom: async (projectId) =>{
		let res = await supabase
			.from('Product')
			.select('*')
			.eq('projectId', projectId);

		if (res.error) return res;

		for (let i = 0; i < res.data.length; i++){
			res.data[i].properties = (await supabase
				.from('Product_properties')
				.select('*')
				.eq('productId', res.data[i].id)).data;

			let market = (await supabase
				.from('Product_marketplace')
				.select('*')
				.eq('productId', res.data[i].id)).data;

			res.data[i].marketplace = market ? market[0] : null;

			res.data[i].inventory = (await supabase
				.from('Product_inventory')
				.select('*')
				.eq('productId', res.data[i].id)).data[0];
		}
		return res;
	},

	get: async (id) =>{
		let res = await supabase
			.from('Product')
			.select('*')
			.eq('id', id);

		if (res.error) return res;

		res.data.properties = (await supabase
			.from('Product_properties')
			.select('*')
			.eq('productId', res.data[i].id)).data;

		res.data.marketplace = (await supabase
			.from('Product_marketplace')
			.select('*')
			.eq('productId', res.data[i].id)).data;

		res.data.inventory = (await supabase
			.from('Product_inventory')
			.select('*')
			.eq('productId', res.data[i].id)).data;
		
		return res;
	},

	getCategories: async () =>{
		let res = await supabase
			.from('Category')
			.select('*');
		return res;
	},

	// sql black magic
	getCategoryById: async (id) => { 
		
		console.log(id, 'dsfdsf')
		const { data, error } = await supabase.rpc('getcategorybyid', {cid : id} );
		if (error) {
			console.error('Error fetching post and its parents:', error);
			return null;
		  }
		
		  return data;
		
	},

	update: async () =>{

	},

	delete: async () =>{

	}
};