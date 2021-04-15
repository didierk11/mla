import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar";
import ItemCategories from "../ItemCategories";
import ItemResults from "../ItemResults";
import { useQuery } from "../../utils/utils";

require("./results-page.scss");

const ResultsPage = () => {
  const [results, setResults] = useState(null);

  let q = useQuery();

  const UpdateResults = (q) => {
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
  };

  UpdateResults(q);

  return (
    <div>
      <SearchBar />
      {results && (
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-12">
              <ItemCategories categories={results.categories} />
            </div>
          </div>
          <div className="item-list-container">
            {results.items.map((item) => (
              <div key={item.id}>
                <ItemResults
                  id={item.id}
                  condition={item.condition}
                  picture={item.picture}
                  title={item.title}
                  amount={item.price.amount}
                  currency={item.price.currency}
                  decimals={item.price.decimals}
                  free_shipping={item.free_shipping}
                  state={item.state}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ResultsPage;
