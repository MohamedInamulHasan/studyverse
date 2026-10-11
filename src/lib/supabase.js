import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://odrpzuraoniyvehihsbv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kcnB6dXJhb25peXZlaGloc2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2OTE1NzksImV4cCI6MjEwNzI2NzU3OX0.faq2a1WOiDNGUNKEDDBJ42_YVtcpjbVsL5N0Earixlo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
