import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  
  function PriceFormat(amount, currency, style) {
    let obj = new Intl.NumberFormat("de-DE", {
      style: style,
      currency: currency,
    });
    return obj.format(amount);
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const searchResultsMapped = results.map((item) => {
    return (
      <div key={item.id} className="row">
        <div className="col-1"></div>
        <div className="col-10 item-list">
          <img
            className="item-list-img"
            alt="imagen del producto"
            src={item.picture}
          ></img>
          <div className="item-list-data">
            <div className="item-list-price">
            $ { PriceFormat(item.price.amount, item.price.currency, "decimal")}
              {/* {item.price.currency} ${item.price.amount} */}
              {item.price.decimals > 0 && (
                <sup>.{item.price.decimals}</sup>
              )}{" "}
              {item.free_shipping && (
                <span>
                  <div className="free-shipping-img"></div>
                </span>
              )}
            </div>
            <div>
              <a href={`/items/${item.id}`}>{item.title}</a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  let query = useQuery();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items", {
        params: {
          q: query.get("search"),
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
              {query.get("search")}
              {" > "}
              {query.get("search")}
              {" > "}
              {query.get("search")}
            </div>
          </div>
        </div>
        {/* <div>{query.get("search")}</div> */}
        <div className="container-fluid">{searchResultsMapped}</div>
      </div>
    </div>
  );
};
export default ResultsPage;
