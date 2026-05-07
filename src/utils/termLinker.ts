import { DictionaryTerm } from '../data/dictionaryData';

/**
 * Automatically injects links to dictionary terms and other blog posts within the HTML content.
 * 
 * @param content The raw HTML content of the blog post.
 * @param dictionary All available dictionary terms.
 * @param currentLang The current language code (en, cs, pl).
 * @returns Processed HTML string with injected links.
 */
export function linkifyContent(content: string, dictionary: DictionaryTerm[], currentLang: 'en' | 'cs' | 'pl'): string {
  if (!content) return '';

  // 1. Prepare and sort terms (longest first to match "Bull Market" before "Market")
  const validTerms = dictionary.filter(t => t.title[currentLang] && t.title[currentLang].length >= 3);
  const terms = [...validTerms].sort((a, b) => b.title[currentLang].length - a.title[currentLang].length);

  if (terms.length === 0) return content;

  // 2. Create a map for quick lookup and a single master regex
  const termMap = new Map<string, DictionaryTerm>();
  const patterns: string[] = [];

  terms.forEach(term => {
    const title = term.title[currentLang];
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Special handling for liquidity declensions in Czech
    if (term.slug === 'liquidity' && currentLang === 'cs') {
      const pattern = `(?:\\b[Ll]ikvidit[a-z]{0,2}\\b)`;
      patterns.push(pattern);
    } else {
      patterns.push(`(?:\\b${escapedTitle}\\b)`);
    }
    
    termMap.set(title.toLowerCase(), term);
  });

  if (patterns.length === 0) return content;
  const masterRegex = new RegExp(patterns.join('|'), 'gi');

  // 3. Split by HTML tags and process only text nodes
  const parts = content.split(/(<[^>]+>)/g);

  return parts.map(part => {
    if (part.startsWith('<')) return part;

    // Single pass replacement to avoid nesting links
    return part.replace(masterRegex, (match) => {
      // Find the corresponding term
      // We check exact match first, then base form for special cases
      let term = termMap.get(match.toLowerCase());
      
      // Fallback for special patterns like liquidity
      if (!term && match.toLowerCase().startsWith('likvidit')) {
        term = dictionary.find(t => t.slug === 'liquidity');
      }

      if (!term) return match;

      const description = term.description[currentLang] || '';
      const shortDesc = description.length > 100 ? description.substring(0, 100).trim() + '...' : description;
      
      return `<a href="/blog/${term.slug}" class="pro-link" title="${shortDesc}">${match}</a>`;
    });
  }).join('');
}
