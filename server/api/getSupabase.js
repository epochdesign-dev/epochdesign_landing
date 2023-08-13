// Documentation of using supabase in nuxt
// Do not delete:

// Using supabase way 1
import { createClient } from '@supabase/supabase-js';
export default defineEventHandler(async ()=>{
    const config = useRuntimeConfig();

    const supabase = createClient(config.url, config.key);

    let { data: clients, error } = await supabase
        .from('clients')
        .select('*')
        .eq('id', 3);
    
    return{
        data: clients,
        error: error
    }
})