import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseAnonKey?.substring(0, 20));
/**
 * Create and export a configured Supabase client.
 * Environment variables are loaded from the .env file.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);