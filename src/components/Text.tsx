function Text({ content, title }: { content: string; title?: string; }) {
  return (
    <div className="flex items-center justify-center p-2 bg-slate-400">
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Text;
