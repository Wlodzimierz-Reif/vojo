import React from "react";
import DietType from "./DietType";

describe("DietType tests", () => {
  it("should render", () => {
    expect(render(<DietType />)).toBeTruthy();
  });
});
