import React from "react";
import { formatPrice } from "../utils/utils";

const ItemResults = (props) => {
  const {
    id,
    picture: src,
    title,
    free_shipping,
    state,
    amount,
    currency,
    decimals,
  } = props;

  return (
    <div className="row justify-content-md-center item-list-row">
      <div className="col-lg-2">
        <div className="item-list-img-container">
          <div className="item-list-img">
            <img alt="Imagen del producto" src={src}></img>
          </div>
        </div>
      </div>
      <div className="col-lg-10">
        <div className="item-list">
          <div className="row">
            <div className="col-md-8">
              <div className="item-list-data">
                <div className="item-list-price">
                  $ {formatPrice(amount, currency, "decimal")}
                  {decimals > 0 && (
                    <sup className="item-list-price-decinal">.{decimals}</sup>
                  )}{" "}
                  {free_shipping && (
                    <span>
                      <div className="item-list-free-shipping-img"></div>
                    </span>
                  )}
                </div>
                <div>
                  <a href={`/items/${id}`}>{title}</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-list-state">{state}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemResults;
