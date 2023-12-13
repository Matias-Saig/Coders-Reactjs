
function Greeting({greeting, content, url, alt}) {
  return (
    
      <div className="flex items-center justify-center gap-x-3 py-10">
        <img className="w-28"
          src={url}
          alt={alt}
        />

        <h2 className="flex flex-col text-sans italic text-emerald-800 text-5xl mt-4">
          {greeting}
          <span className="text-4xl">{content}</span>
        </h2>
        
      </div>
    
  );
}

export default Greeting;
