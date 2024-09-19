import { supabase } from './dbConnection.js';

export const UserController = {
    create: async () =>{
        
    },

    read: async () =>{

    },

    update: async () =>{

    },

    delete: async () =>{

    },

    test: async () =>{
        const res = await supabase
            .from('User_type')
            .select('*');

        return res.data;
    }
};