import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const ResultsPage = () => {
  const [results, setResults] = useState([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const searchResultsMapped  =
    results.map((item) => {
      return (
        <div key={item.id}>
          <a href={`/items/${item.id}`}>{item.title}</a>
          <p>
            <span>
              {item.price.amount}.{item.price.decimals} {item.price.currency}
            </span>
          </p>
          <img
            className="img"
            alt="imagen del producto"
            src={item.picture}
          ></img>
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
      <div>Lista de resultados de búsqueda</div>
      <div>{query.get("search")}</div>
      <div className="ui celled list">{searchResultsMapped}</div>
    </div>
  );
};
export default ResultsPage;
