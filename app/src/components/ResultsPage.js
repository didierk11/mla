import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

import { formatPrice, useQuery } from "../utils/utils";

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const resultsMapped = results.map((item) => {
    return (
      <div key={item.id} className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="item-list">
            <div className="item-list-img-container">
              <div className="item-list-img">
                <img alt="Imagen del producto" src={item.picture}></img>
              </div>
            </div>
            <div className="item-list-data">
              <div className="item-list-price">
                ${" "}
                {formatPrice(item.price.amount, item.price.currency, "decimal")}
                {item.price.decimals > 0 && (
                  <sup className="item-list-price-decinal">.{item.price.decimals}</sup>
                )}{" "}
                {item.free_shipping && (
                  <span>
                    <div className="item-list-free-shipping-img"></div>
                  </span>
                )}
              </div>
              <div className="item-list-state">{item.state}</div>
              <div>
                <a href={`/items/${item.id}`}>{item.title}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  let q = useQuery();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items", {
        params: {
          q: q,
        },
      })
      .then((response) => {
        setResults(response.data.items);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResults]);

  return (
    <div>
      <SearchBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11">
            <div className="item-cat">
              {q}
              {" > "}
              {q}
              {" > "}
              {q}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="item-list-container">{resultsMapped}</div>
        </div>
      </div>
    </div>
  );
};
export default ResultsPage;
