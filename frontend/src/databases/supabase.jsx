import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mevswyanfiamhugiovcs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldnN3eWFuZmlhbWh1Z2lvdmNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNTAzMDEsImV4cCI6MjAyMjYyNjMwMX0.LlHSEiP5A5Hxwmz2BW37DLolmtX3HQ1ZtbKH2jpCBOk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
