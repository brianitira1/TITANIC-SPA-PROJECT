import { createClient, SupabaseClient } from "@supabase/supabase-js"; // Importing createClient function from supabase-js library

// Define types for Supabase URL and key
type SupabaseUrl = any;
type SupabaseKey = any;

// Supabase URL and key for authentication
const supabaseUrl: SupabaseUrl = process.env.SUPABASE_URL;
const supabaseKey: SupabaseKey = process.env.SUPABASE_KEY;

// Creating Supabase client instance
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase; // Exporting Supabase client instance
