import { supabase } from '../db/dbConnection.js';

export const ProductController = {
    create: async (newProduct) => {
        const { data, error } = await supabase
          .from('Product')  
          .insert([newProduct]);  
    
        if (error) {
            console.error('Error creating product:', error.message);  // More detailed error message
            console.error('Details:', error.details);  // Log additional error details
            console.error('Hint:', error.hint);  // Helpful hints from the database
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