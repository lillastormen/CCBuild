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

    read: async () =>{

    },

    update: async () =>{

    },

    delete: async () =>{

    }
};