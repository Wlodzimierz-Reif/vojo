import React from "react";
import DietBreakdown from "./DietBreakdown";
import { render } from "@testing-library/react";

describe("DietBreakdown tests", () => {
  it("should render", () => {
    expect(render(<DietBreakdown brief={"hello"} />)).toBeTruthy();
  });
});
