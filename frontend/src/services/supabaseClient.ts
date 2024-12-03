// services/supabaseClient.ts


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rkgozffagtumbnzzckpl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZ296ZmZhZ3R1bWJuenpja3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwOTQ1ODEsImV4cCI6MjA0ODY3MDU4MX0.m4B3CvEX_7Bnleq69lxAlY2zYjfyUIz-WZrbkmMZcm0'; // public API key Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
