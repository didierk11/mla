import React from "react";
import { render } from "react-dom";
import ItemDetailInfo from "../components/ItemDetailInfo";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

//testing data
// const condition = data.condition;
// const sold_quantity = data.sold_quantity;
// const title = data.title;
// const amount = data.price.amount;
// const currency = data.price.currency;
// const decimals = data.price.decimals;

const {condition, sold_quantity, title} = data;
const {amount, currency, decimals} = data.price;

describe("Snapshot test:", () => {
  it("ItemDetailInfo render correctly", () => {
    const div = renderer
      .create(
        <ItemDetailInfo
          condition={condition}
          sold_quantity={sold_quantity}
          title={title}
          amount={amount}
          currency={currency}
          decimals={decimals}
        />
      )
      .toJSON();
    expect(div).toMatchSnapshot();
  });
});

describe("Smoke test:", () => {
  it("ItemDetailInfo render without crashing", () => {
    const div = document.createElement("div");
    render(
      <ItemDetailInfo
        condition={condition}
        sold_quantity={sold_quantity}
        title={title}
        amount={amount}
        currency={currency}
        decimals={decimals}
      />,
      div
    );
  });
});
