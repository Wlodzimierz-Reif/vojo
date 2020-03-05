import React from "react";
import PriorityBox from "./PriorityBox";

describe("PriorityBox tests", () => {
  it("should render", () => {
    expect(render(<PriorityBox />)).toBeTruthy();
  });
});
