
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrawlRequest {
  urls: string[];
}

const crawlWebsite = async (url: string): Promise<string> => {
  try {
    console.log(`Crawling: ${url}`);
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'KIU-Bot/1.0 (Educational Purpose)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }

    const html = await response.text();
    
    // Extract text content (basic HTML parsing)
    const textContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    return textContent;
  } catch (error) {
    console.error(`Error crawling ${url}:`, error);
    return `Error crawling ${url}: ${error.message}`;
  }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { urls }: CrawlRequest = await req.json();

    if (!urls || !Array.isArray(urls)) {
      return new Response(
        JSON.stringify({ error: 'URLs array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const crawlResults = await Promise.all(
      urls.map(async (url) => ({
        url,
        content: await crawlWebsite(url),
        timestamp: new Date().toISOString(),
      }))
    );

    console.log(`Successfully crawled ${crawlResults.length} URLs`);

    return new Response(
      JSON.stringify({ 
        success: true,
        results: crawlResults,
        totalUrls: urls.length 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in web-crawler function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to crawl websites',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
