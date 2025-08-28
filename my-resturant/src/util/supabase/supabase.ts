import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const fetchProducts = async (category?: string) => {
    let query = supabase.from('Items').select('*');
    if (category) {
        query = query.eq('Category', category);
    }
    const { data, error } = await query;
    if (error) console.error(error);
    return data;
};
