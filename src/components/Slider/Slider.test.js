import React from "react";
import Slider from "./Slider";

describe("Slider tests", () => {
  let component;

  it("should render", () => {
    expect(render(<Slider />)).toBeTruthy();
  });
});
