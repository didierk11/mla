import React from "react";
import { render } from "react-dom";
import ItemResults from "../components/ItemResults";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

//testing data
const id = data.id;
const src = data.src;
const title = data.title;
const amount = data.price.amount;
const currency = data.price.currency;
const decimals = data.price.decimals;
const free_shipping = data.free_shipping;
const state = data.state;

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
