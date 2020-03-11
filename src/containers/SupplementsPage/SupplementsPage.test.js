import React from "react";
import SupplementsPage from "./SupplementsPage";
import { render } from "@testing-library/react";


describe("SupplementsPage tests", () => {
  it("should render", () => {
    expect(render(<SupplementsPage/>)).toBeTruthy();
  });

});
