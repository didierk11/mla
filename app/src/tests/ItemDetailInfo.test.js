import React from "react";
import { render } from "react-dom";
import ItemDetailInfo from "../components/ItemDetailInfo";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

// data
const {condition, sold_quantity, title} = data;
const {amount, currency, decimals} = data.price;

// test
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
