import React from "react";
import { render } from "react-dom";
import ItemDetailDescription from "../components/ItemDetailDescription";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

// data
const desc = data.description;

describe("Snapshot test:", () => {
  it("ItemDetailDescription render correctly", () => {
    const div = renderer.create(<ItemDetailDescription description={desc} />).toJSON();
    expect(div).toMatchSnapshot();
  });
});

// test
describe("Smoke test:", () => {
  it("ItemDetailDescription render without crashing", () => {
    const div = document.createElement("div");
    render(<ItemDetailDescription description={desc} />, div);
  });
});