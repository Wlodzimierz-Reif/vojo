import React from "react";
import IncompletePage from "./IncompletePage";

describe("IncompletePage tests", () => {
  it("should render", () => {
    expect(render(<IncompletePage />)).toBeTruthy();
  });
});
