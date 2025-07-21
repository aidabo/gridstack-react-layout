function Image({ src, title}: { src: string, title?: string }) {
  return (
   <div className="absolute inset-0 flex items-center justify-center p-1">
      <img 
        onClick={()=>alert(title || "this is a image")}
        src={src} 
        alt="Widget" 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

export default Image ;


