import React from "react";
import Dashboard from "./Dashboard";

describe("Dashboard tests", () => {
  it("should render", () => {
    expect(render(<Dashboard />)).toBeTruthy();
  });
});
