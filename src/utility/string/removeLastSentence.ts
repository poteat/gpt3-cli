export function removeLastSentence(s: string) {
  return s.replace(/\.[^.]+$/, ".");
}
