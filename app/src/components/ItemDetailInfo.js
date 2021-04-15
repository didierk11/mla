import React from "react";
import { formatPrice } from "../utils/utils";


const ItemDetailInfo = (props) => {
  const condition = props.condition;
  const sold_quantity = props.sold_quantity;
  const title = props.title;
  const amount = props.amount;
  const currency = props.currency;
  const decimals = props.decimals;

  return (
    <div className="item-details-info">
      <div className="item-details-new-sold-quantity">
        {condition === "new" ? "Nuevo" : "Usado"} -{" "}
        {sold_quantity} Vendidos
      </div>
      <div className="item-detail-title">{title}</div>
      <div className="item-detail-price">
        $ {formatPrice(amount, currency, "decimal")}
        {decimals > 0 && (
          <sup className="item-details-price-decimal">
            .{decimals}
          </sup>
        )}
      </div>
      <div className="item-detail-buy">
        <button className="item-detail-buy-btn">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetailInfo;
