import React from "react";

function Navbar_Item({ content, url }) {
  return (
    <>
      <a
        href={url}
        className="bg-emerald-700 hover:bg-lime-500 text-stone-50
        font-bold font-sans text-base text-center uppercase tracking-wider
        py-1 px-2 w-full drop-shadow-md"
      >
        {content}
      </a>
    </>
  );
}

export default Navbar_Item;
