import React from "react";
import { render } from "react-dom";
import ItemDetailImage from "../components/ItemDetailImage";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

// data
const {src, alt} = data;

// test
describe("Snapshot test:", () => {
  it("ItemDetailImage render correctly", () => {
    const div = renderer
      .create(<ItemDetailImage src={src} alt={alt} />)
      .toJSON();
    expect(div).toMatchSnapshot();
  });
});

describe("Smoke test:", () => {
  it("ItemDetailImage render without crashing", () => {
    const div = document.createElement("div");
    render(<ItemDetailImage src={src} alt={alt} />, div);
  });
});
