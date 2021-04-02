import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

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

  return (
    <div>
      <SearchBar />
      <div>Detalle del producto seleccionado</div>
      <div>{id}</div>
      {results && (
        <div>
          <div>{results.title}</div>
          <div>
            {results.price.amount}.{results.price.decimals}{" "}
            {results.price.currency}
          </div>
          <div>
            <img src={results.picture} alt="imagen"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
