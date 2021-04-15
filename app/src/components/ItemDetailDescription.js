import React from "react";

const getItemDetails = (props) => {
  const descriptionText = props.description;
  return (
    <div className="col-lg-7 item-detail-description">
      <p className="item-detail-description-title">Descripción del Producto</p>
      <p className="item-detail-description-text">
        {descriptionText
          ? descriptionText
          : "El vendedor no proporcionó una descripción."}
      </p>
    </div>
  );
};

export default getItemDetails;

