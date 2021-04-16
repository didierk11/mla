import React from "react";
import { render } from "react-dom";
import ItemDetailImage from "../components/ItemDetailImage";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

//testing data
const src = data.src;
const alt = data.title;

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
