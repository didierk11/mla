import React from "react";
import { render } from "react-dom";
import ItemResults from "../components/ItemResults";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

// data
const {id, src, title, free_shipping, state} = data;
const {amount, currency, decimals} = data.price;

// test
describe("Snapshot test:", () => {
  it("ItemResults render correctly", () => {
    const div = renderer
      .create(
        <ItemResults
          id={id}
          src={src}
          free_shipping={free_shipping}
          state={state}
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
  it("ItemResults render without crashing", () => {
    const div = document.createElement("div");
    render(
      <ItemResults
        id={id}
        src={src}
        free_shipping={free_shipping}
        state={state}
        title={title}
        amount={amount}
        currency={currency}
        decimals={decimals}
      />,
      div
    );
  });
});
