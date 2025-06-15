
/**
 * Utilities for splitting chat message text and matching labels to links.
 */

export interface LinkItem {
  text: string;
  url: string;
  icon?: string;
}

/** Split a message into logical blocks based on bullets/headings. */
export function splitBulletBlocks(text: string): string[] {
  const lines = text.split('\n');
  const blocks: string[] = [];
  let current = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Detect "bullet" or "item" - starts with number., dash, or ALL CAPS/LABEL:
    const isListItem = /^(\d+\.\s+|-\s+|•\s+|[A-Za-z ]+?:)/.test(line);

    if (isListItem && current) {
      blocks.push(current.trim());
      current = line;
    } else if (isListItem) {
      current = line;
    } else if (line === '') {
      if (current) blocks.push(current.trim());
      current = '';
    } else {
      current += (current ? ' ' : '') + line;
    }
  }
  if (current) blocks.push(current.trim());
  return blocks;
}

/** Try to match a label (used in [label]) to a link in the list. */
export function getUrlForLabel(label: string, links?: LinkItem[]): LinkItem | undefined {
  if (!Array.isArray(links)) return undefined;
  label = label.trim();
  // first exact match on text (ignore emojis)
  let found = links.find(
    (l) => l.text?.replace(/^[^A-Za-z0-9]+/, '').toLowerCase() === label.toLowerCase(),
  );
  if (!found) {
    found = links.find((l) => l.url && l.url.toLowerCase().includes(label.toLowerCase()));
  }
  if (!found) {
    found = links.find(
      (l) =>
        l.text?.toLowerCase().includes(label.toLowerCase()) ||
        l.url?.toLowerCase().includes(label.toLowerCase()),
    );
  }
  return found;
}
