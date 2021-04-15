import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar";
import ItemCategories from "../ItemCategories";
import ItemDetailDescription from "../ItemDetailDescription";
import ItemDetailInfo from "../ItemDetailInfo";
import ItemDetailImage from "../ItemDetailImage";

require("./detail-page.scss");

const DetailsPage = () => {
  const [results, setResults] = useState(null);
  let { id } = useParams();

  const UpdateDetail = (id) => {
    useEffect(
      () => {
        async function fetchData() {
          try {
            const response = await axios.get(
              "http://localhost:3001/api/items/" + id
            );
            setResults(response.data.item);
          } catch (e) {
            console.error(e);
          }
        }
        fetchData();
      },
      [id],
      [results]
    );
  };

  UpdateDetail(id);

  return (
    <div>
      <SearchBar />
      {results && (
        <div className="container">
          <ItemCategories categories={results.categories} />
          <div className="item-detail">
            <div className="row">
              <div className="col-lg-7">
                <ItemDetailImage src={results.picture} alt={results.title} />
              </div>
              <div className="col-lg-4">
                <ItemDetailInfo
                  condition={results.condition}
                  sold_quantity={results.sold_quantity}
                  title={results.title}
                  amount={results.price.amount}
                  currency={results.price.currency}
                  decimals={results.price.decimals}
                />
              </div>
            </div>
            <div className="row">
              <ItemDetailDescription description={results.description} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
