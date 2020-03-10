import React from "react";
import HomePage from "./HomePage";

describe("HomePage tests", () => {
  it("should render", () => {
    expect(render(<HomePage />)).toBeTruthy();
  });
});

