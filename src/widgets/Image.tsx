
function Image({ src }: { src: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src={src} 
        alt="Widget" 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

export default Image ;
