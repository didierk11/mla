import React from "react";
import { render } from "react-dom";
import ItemCategories from "../components/ItemCategories";
import renderer from "react-test-renderer";
import data from "./dataSets/items.json";

//  data
const cat = data.categories;

// test
describe("Snapshot test:", () => {
  it("ItemCategories render correctly", () => {
    const div = renderer.create(<ItemCategories categories={cat} />).toJSON();
    expect(div).toMatchSnapshot();
  });
});

describe("Smoke test:", () => {
  it("ItemCategories render without crashing", () => {
    const div = document.createElement("div");
    render(<ItemCategories categories={cat} />, div);
  });
});
