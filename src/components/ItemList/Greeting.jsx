import React from "react";

function Greeting({greeting, content, url, alt}) {
  return (
    
      <div className="flex items-center justify-center gap-x-3 py-10">
        <img className="w-28"
          src={url}
          alt={alt}
        />

        <h2 className="text-sans italic text-emerald-800 text-6xl mt-8">
          {greeting}
          <span>{content}</span>
        </h2>
        
      </div>
    
  );
}

export default Greeting;
