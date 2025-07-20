function Text({ content, title }: { content: string; title?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-1">
      <p>{content}</p>
    </div>
  );
}

export default Text;
