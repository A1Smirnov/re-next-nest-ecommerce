import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://rkgozffagtumbnzzckpl.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY || 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZ296ZmZhZ3R1bWJuenpja3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwOTQ1ODEsImV4cCI6MjA0ODY3MDU4MX0.m4B3CvEX_7Bnleq69lxAlY2zYjfyUIz-WZrbkmMZcm0';

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
