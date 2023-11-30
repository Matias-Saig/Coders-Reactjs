import React from "react";

function ItemList({ url, alt, title, content, description }) {
  return (
    <li>
      <img src={url} alt={alt} />
      <h4>{title}</h4>
      <p>{content}</p>
      <p>{description}</p>
    </li>
  );
}

export default ItemList;
