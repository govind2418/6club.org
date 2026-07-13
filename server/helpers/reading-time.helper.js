function readingTime(text, wordsPerMinute = 200) {
  const words = String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min read`;
}

module.exports = readingTime;
