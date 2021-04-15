import React from "react";

const ItemDetailImage = (props) => {
  const src = props.src;
  const alt = props.alt;

  return (
    <div>
      <div className="item-detail-img">
        <img src={src} alt={alt}></img>
      </div>
    </div>
  );
};

export default ItemDetailImage;
