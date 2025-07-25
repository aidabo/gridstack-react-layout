function Text({ content, title }: { content: string; title?: string; }) {
  return (
    <div className="flex items-center justify-center p-0 bg-slate-400">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Text;
