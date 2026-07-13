export function readingTime(text: string, wordsPerMinute = 200): string {
  const words = String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min read`;
}
