
import { supabase } from "@/integrations/supabase/client";

/**
 * Fetches crawled HTML text content for a list of URLs using the Supabase web-crawler edge function.
 * @param urls Array of URLs to crawl.
 * @returns Promise with the crawl results.
 */
export async function fetchCrawledContent(urls: string[]) {
  try {
    const { data, error } = await supabase.functions.invoke('web-crawler', {
      body: { urls },
    });
    if (error) {
      throw error;
    }
    return data?.results ?? [];
  } catch (err) {
    console.error('Failed to fetch crawled content:', err);
    return [];
  }
}
