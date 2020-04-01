import React from "react";
import DashboardNotPaid from "./DashboardNotPaid";
import { render } from "enzyme";

describe("DashboardNotPaid tests", () => {
  it("should render", () => {
    expect(render(<DashboardNotPaid />)).toBeTruthy();
  });
});
