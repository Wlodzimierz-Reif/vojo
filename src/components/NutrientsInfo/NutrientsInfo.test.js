import React from "react";
import NutrientsInfo from "./NutrientsInfo";
import { render } from "@testing-library/react";

describe("NutrientsInfo tests", () => {
  it("should render", () => {
    expect(render(<NutrientsInfo />)).toBeTruthy();
  });
});


