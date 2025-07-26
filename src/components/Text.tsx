function Text({ content, title }: { content: string; title?: string }) {
  return (
    <div className="flex items-start p-2 bg-white border rounded shadow-sm text-left">
      <div>
        {title && <h3 className="text-sm font-semibold mb-1">{title}</h3>}
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}

export default Text;
