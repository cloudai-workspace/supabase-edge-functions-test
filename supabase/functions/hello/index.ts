// supabase/functions/hello/index.ts
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// CORS headers for all responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
};

Deno.serve(async (req: Request) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders
    });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? 'https://fetyrgtzfeqcudmgbixi.supabase.co'
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldHlyZ3R6ZmVxY3VkbWdiaXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NzkyOTcsImV4cCI6MjA3NDA1NTI5N30.Cvf69n4ZnGIzwtmcqC02seRW2dhg0l4yksXxiHHxKBA'
    
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase Key present:', supabaseKey ? 'Yes' : 'No');
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    console.log('Attempting to fetch posts...');

    // Get posts from database
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    console.log('Database query completed');
    console.log('Posts:', posts);
    console.log('Error:', error);

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    // Get auth header
    const authHeader = req.headers.get('Authorization');
    const apikey = req.headers.get('apikey');
    
    console.log('Auth header:', authHeader ? 'Present' : 'Not present');
    console.log('API key header:', apikey ? 'Present' : 'Not present');
    console.log('Posts fetched:', posts?.length || 0);

    // Response data with database content
    const responseData = {
      message: "Hello from Supabase Edge Functions! 🚀 (Connected to Database)",
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      userAgent: req.headers.get('user-agent') || 'Unknown',
      status: 'online',
      authStatus: authHeader ? 'authenticated' : 'anonymous',
      database: {
        connected: true,
        postsCount: posts?.length || 0,
        posts: posts || []
      },
      deployment: 'production'
    };

    return new Response(
      JSON.stringify(responseData, null, 2),
      { 
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    
    const errorResponse = {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      status: 'error',
      database: {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown database error'
      }
    };

    return new Response(
      JSON.stringify(errorResponse, null, 2),
      { 
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  }
});
