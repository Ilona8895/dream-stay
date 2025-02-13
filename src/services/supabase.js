import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kxvmbswmqgffjnsantxu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4dm1ic3dtcWdmZmpuc2FudHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0ODEwOTYsImV4cCI6MjA0OTA1NzA5Nn0.fI1bLHaoE7F6XQdrwNCql8oksSSRReZeDdrAFOklPoo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
