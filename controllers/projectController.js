import { supabase } from '../db/dbConnection.js';

export const ProjectController = {
    create: async () =>{
        
    },

    add: async (project) =>{
        let data = {};

        for (const entry of project.entries())
            data[entry[0]] = entry[1];

        let res = await supabase
            .from('Project')
            .insert(data);

        return res;
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
            .eq('id', id)
            .maybeSingle();
        return res;
    },

    update: async () =>{

    },

    delete: async () =>{

    }
};