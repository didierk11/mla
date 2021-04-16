import React from "react";
import { render } from "react-dom";
import SearchBar from "../components/SearchBar";
import renderer from "react-test-renderer";

describe("Snapshot test:", () => {
  it("SearchBar render correctly", () => {
    const div = renderer.create(<SearchBar />).toJSON();
    expect(div).toMatchSnapshot();
  });
});

describe("Smoke test:", () => {
  // SearchBar
  it("SearchBar render without crashing", () => {
    const div = document.createElement("div");
    render(<SearchBar />, div);
  });
});
