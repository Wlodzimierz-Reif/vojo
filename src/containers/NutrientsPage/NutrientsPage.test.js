import React from "react";
import NutrientsPage from "./NutrientsPage";
import { render } from "@testing-library/react";

describe("NutrientsPage tests", () => {
  it("should render", () => {
    expect(render(<NutrientsPage />)).toBeTruthy();
  });
});


