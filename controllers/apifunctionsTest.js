import { supabase } from '../db/dbConnection.js';

export async function Users() {
const { data, error } = await supabase
    .from('User_type')
    .select('*');

    console.log(data, error);
}