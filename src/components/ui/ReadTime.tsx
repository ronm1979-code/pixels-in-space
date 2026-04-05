export function ReadTime({ content }: { content: string }) {
  const text = content.replace(/<[^>]+>/g, "");
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return (
    <span className="text-xs text-text-muted">
      {minutes} min read
    </span>
  );
}
