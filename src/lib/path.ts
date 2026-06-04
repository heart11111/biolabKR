export function withBase(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${cleanBase}${cleanPath}`;
}

