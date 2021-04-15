import React from "react";

const ItemCategories = (props) => {
  const categories = props.categories;
  return (
    <div className="item-cat">
      <ol>
        {categories.map((item) => (
          <li key={item}>
            {item}
            <span className="chevron">{" > "}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemCategories;
