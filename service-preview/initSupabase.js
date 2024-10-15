const supabaseUrl = 'https://sygpwnluwwetrkmwilea.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5Z3B3bmx1d3dldHJrbXdpbGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDIxNTQsImV4cCI6MjAyMDg3ODE1NH0.n2RSjgeqR-41wSO_IFuzPJKcc9bo1DbkXiPEsc1jO00';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

window.supabase = supabase;
