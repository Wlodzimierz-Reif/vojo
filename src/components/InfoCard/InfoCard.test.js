import React from "react";
import TestComp from "./TestComp";
import { render } from "@testing-library/react";
describe("TestComp tests", () => {
  it("should render", () => {
    expect(render(<TestComp />)).toBeTruthy();
  });
});
