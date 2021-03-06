import React from "react";
import { formatPrice } from "../utils/utils";

const ItemDetailInfo = (props) => {
  const { condition, sold_quantity, title } = props;
  const { amount, currency, decimals } = props;

  return (
    <div className="item-details-info">
      <div className="item-details-new-sold-quantity">
        {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} Vendidos
      </div>
      <div className="item-detail-title">{title}</div>
      <div className="item-detail-price">
        $ {formatPrice(amount, currency, "decimal")}
        {decimals > 0 && (
          <sup className="item-details-price-decimal">.{decimals}</sup>
        )}
      </div>
      <div className="item-detail-buy">
        <button className="item-detail-buy-btn">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetailInfo;
