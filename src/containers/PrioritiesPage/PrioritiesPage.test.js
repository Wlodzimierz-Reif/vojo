import React from "react";
import PrioritiesPage from "./PrioritiesPage";
import { render } from "@testing-library/react";

describe("PrioritiesPage tests", () => {
    it("should render", () => {
      expect(render(<PrioritiesPage/>)).toBeTruthy();
    });
  
});
