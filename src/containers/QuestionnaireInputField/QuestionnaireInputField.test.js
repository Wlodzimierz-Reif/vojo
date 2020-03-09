import React from "react";
import QuestionnaireInputField from "./QuestionnaireInputField";
import { render } from "@testing-library/react";

describe("QuestionnaireInputField tests", () => {
  it("should render", () => {
    expect(render(<QuestionnaireInputField />)).toBeTruthy();
  });
});
