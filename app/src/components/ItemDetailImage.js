import React from "react";

const ItemDetailImage = (props) => {
  const { src, alt } = props;

  return (
    <div>
      <div className="item-detail-img">
        <img src={src} alt={alt}></img>
      </div>
    </div>
  );
};

export default ItemDetailImage;
