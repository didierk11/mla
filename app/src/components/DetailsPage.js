import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { formatPrice } from "../utils/utils";


const DetailsPage = () => {
  const [results, setResults] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/items/" + id
        );
        setResults(response.data.item);
        console.log(results);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  // let price = PriceFormat(results.price.amount, results.price.currency, "decimal");
  // console.log(PriceFormat(results.price.amount, results.price.currency, "decimal"));
  return (
    <div>
      <SearchBar />
      {/* <div>Detalle del producto seleccionado</div>
      <div>{id}</div> */}
      {results && (
        <div className="container">
          <div className="item-cat">
            {id}
            {" > "}
            {id}
            {" > "}
            {id}
          </div>
          <div className="item-detail">
            <div className="row">
              <div className="col-lg-8">
                <div className="item-detail-img-container">
                  <div className="item-detail-img">
                    <img src={results.picture} alt="imagen del producto"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item-details-info">
                  <div className="item-details-new-sold-quantity">
                    {results.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                    {results.sold_quantity} Vendidos
                  </div>
                  <div className="item-detail-title">{results.title}</div>
                  <div className="item-detail-price">
                    ${" "}
                    {formatPrice(
                      results.price.amount,
                      results.price.currency,
                      "decimal"
                    )}
                    {/* {results.price.currency} ${results.price.amount} */}
                    {results.price.decimals > 0 && (
                      <sup className="item-details-price-decimal">.{results.price.decimals}</sup>
                    )}
                  </div>
                  <div className="item-detail-buy">
                    <button className="item-detail-buy-btn">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 item-detail-description">
                <p className="item-detail-description-title">
                  Descripción del Producto
                </p>
                <p className="item-detail-description-text">
                  {results.description
                    ? results.description
                    : "El vendedor no proporcionó una descripción."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
