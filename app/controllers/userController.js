import { supabase } from '../db/dbConnection.js';

export const UserController = {
    create: async (name) =>{
        let res = await supabase
            .from('User_type')
            .insert({name});

        console.log(res)
    },

    read: async (id) =>{
        const res = await supabase
            .from('User_type')
            .select('*')
            .eq('id', id);

        console.log(res)
    },

    update: async () =>{

    },

    delete: async (id) =>{
        let res = await supabase
            .from('User_type')
            .delete()
            .eq('id', id);

        console.log(res)
    },

    test: async () =>{
        const res = await supabase
            .from('User_type')
            .select('*');

        return res;
    }
};