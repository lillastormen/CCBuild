import { supabase } from '../db/dbConnection.js';

export const ProductController = {
    create: async (newProduct) => {
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

    update: async () =>{

    },

    delete: async () =>{

    }
};