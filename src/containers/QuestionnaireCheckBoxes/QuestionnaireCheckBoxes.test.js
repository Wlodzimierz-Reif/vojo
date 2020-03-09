import React from "react";
import QuestionnaireCheckBoxes from "./QuestionnaireCheckBoxes";
import { render } from "@testing-library/react";

describe("QuestionnaireCheckBoxes tests", () => {
  it("should render", () => {
    expect(render(<QuestionnaireCheckBoxes />)).toBeTruthy();
  });
});
