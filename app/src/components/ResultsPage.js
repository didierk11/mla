import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { formatPrice, useQuery } from "../utils/utils";
require("./result-page.scss");

const ResultsPage = () => {
  const [results, setResults] = useState(null);

  let q = useQuery();

  function UpdateResults(q) {
    useEffect(() => {
      axios
        .get("http://localhost:3001/api/items", {
          params: {
            q: q,
          },
        })
        .then((response) => {
          setResults(response.data);

        })
        .catch((error) => {
          console.log(error);
        });
    }, [q]);
  }

  UpdateResults(q);

  return (
    <div>
      <SearchBar />
      {results && (
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-12">
              <div className="item-cat">
                <ol>
                  {results.categories.map((item) => 
                    <li key={item}>{item}
                      <span className="chevron">{" > "}</span>
                    </li>)}
                </ol>
              </div>
            </div>
          </div>
          <div className="item-list-container">
            {results.items.map((item) => (
              <div
                key={item.id}
                className="row justify-content-md-center item-list-row"
              >
                <div className="col-lg-2">
                  <div className="item-list-img-container">
                    <div className="item-list-img">
                      <img alt="Imagen del producto" src={item.picture}></img>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="item-list">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="item-list-data">
                          <div className="item-list-price">
                            ${" "}
                            {formatPrice(
                              item.price.amount,
                              item.price.currency,
                              "decimal"
                            )}
                            {item.price.decimals > 0 && (
                              <sup className="item-list-price-decinal">
                                .{item.price.decimals}
                              </sup>
                            )}{" "}
                            {item.free_shipping && (
                              <span>
                                <div className="item-list-free-shipping-img"></div>
                              </span>
                            )}
                          </div>
                          <div>
                            <a href={`/items/${item.id}`}>{item.title}</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-list-state">{item.state}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ResultsPage;
