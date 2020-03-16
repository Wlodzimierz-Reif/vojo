import React from "react";
import PageTwentyOneTwo from "./PageTwentyOneTwo";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyOneTwo tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyOneTwo />)).toBeTruthy();
  });
});
