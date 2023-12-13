/* eslint-disable react/prop-types */
function Navbar_Item({ content, url, active }) {

  
  return (
    <>
      <a
        href={url}
        className= {`hover:bg-teal-600 text-stone-300 hover:text-stone-50 transition-all
        font-extrabold font-serif text-lg text-center uppercase tracking-wider
        w-full py-2 ${active}`}
      >
        {content}
      </a>

      
    </>
  );
}

export default Navbar_Item;
