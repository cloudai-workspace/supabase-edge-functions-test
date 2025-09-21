// supabase/functions/hello/index.ts

// CORS headers for all responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
};

Deno.serve((req: Request) => {
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
    // Get auth header - ถ้าไม่มีก็ใช้ anonymous
    const authHeader = req.headers.get('Authorization');
    const apikey = req.headers.get('apikey');
    
    console.log('Auth header:', authHeader ? 'Present' : 'Not present');
    console.log('API key header:', apikey ? 'Present' : 'Not present');

    // Response data - ทำงานได้แม้ไม่มี auth
    const responseData = {
      message: "Hello from Supabase Edge Functions! 🚀 (Public Access Working)",
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      userAgent: req.headers.get('user-agent') || 'Unknown',
      status: 'online',
      authStatus: authHeader ? 'authenticated' : 'anonymous',
      publicAccess: true,
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
      status: 'error'
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
