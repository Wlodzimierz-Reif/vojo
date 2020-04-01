import React from "react";
import Dashboard from "./Dashboard";
import { render } from "enzyme";

describe("Dashboard tests", () => {
  it("should render", () => {
    expect(render(<Dashboard />)).toBeTruthy();
  });
});
