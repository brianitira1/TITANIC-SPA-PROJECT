import { createClient } from "@supabase/supabase-js"; // Importing createClient function from supabase-js library

// Supabase URL and key for authentication
const supabaseUrl = "https://mevswyanfiamhugiovcs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldnN3eWFuZmlhbWh1Z2lvdmNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNTAzMDEsImV4cCI6MjAyMjYyNjMwMX0.LlHSEiP5A5Hxwmz2BW37DLolmtX3HQ1ZtbKH2jpCBOk";

// Creating Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; // Exporting Supabase client instance
