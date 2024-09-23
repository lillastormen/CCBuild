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

    read: async () =>{

    },

    update: async () =>{

    },

    delete: async () =>{

    }
};