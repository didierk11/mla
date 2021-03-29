import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState();
  const [searchValue, setSearchValue] = useState();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
      const search = async () => {
        const {response} = await axios.get('http://localhost:3000/api/items', {
            params: {
                q: searchValue
            },
        })
        setResults(response.data.items);
        }
        search()
    }, [searchValue], [setResults]);
    */

  useEffect(
    () => {
      setLoading(true);
      axios
        .get("http://localhost:3001/api/items", {
          params: {
            q: searchValue,
          },
        })
        .then((response) => {
          setLoading(false);
          setResults(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [searchValue],
    [setResults]
  );

  const searchResultsMapped = results.map((item) => {
    return loading === true ? (
      <div key={item.id}>Cargando...</div>
    ) : (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>
          <span>
            {item.price.amount}.{item.price.decimals} {item.price.currency}
          </span>
        </p>
        <img
          alt="imagen del producto"
          src={item.picture}
          height="100px"
          width="100px"
        ></img>
      </div>
    );
  });

  return (
    <div>
      <div className="form">
        <div className="form-control">
          <label>Search Term</label>
          <input className="input" onChange={(e) => setTerm(e.target.value)} />
          <button onClick={() => setSearchValue(term)}>Buscar</button>
        </div>
      </div>
      <div className="ui celled list">{searchResultsMapped}</div>
    </div>
  );
};

export default Search;