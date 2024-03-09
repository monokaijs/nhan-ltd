type ClassChunk = string | undefined;
export function cn(...chunks: ClassChunk[] | ClassChunk[][]) {
  return chunks.filter(c => !!c).map(c => {
    if (typeof c === 'object') {
      return c.filter(_c => !!_c).map(_c => _c!.trim()).join(' ');
    } else return c?.trim();
  }).join(' ');
}
