import React from "react";
import { render } from "react-dom";
import ItemDetailDescription from "../components/ItemDetailDescription";
import renderer from "react-test-renderer";

//testing data
const desc = 'Item valid description text.';

describe("Snapshot test:", () => {
  it("ItemDetailDescription render correctly", () => {
    const div = renderer.create(<ItemDetailDescription description={desc} />).toJSON();
    expect(div).toMatchSnapshot();
  });
});

describe("Smoke test:", () => {
  it("ItemDetailDescription render without crashing", () => {
    const div = document.createElement("div");
    render(<ItemDetailDescription description={desc} />, div);
  });
});