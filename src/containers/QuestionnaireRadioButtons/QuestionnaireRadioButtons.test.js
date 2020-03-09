import React from "react";
import QuestionnaireRadioButtons from "./QuestionnaireRadioButtons";
import { render } from "@testing-library/react";

describe("QuestionnaireRadioButtons tests", () => {
  it("should render", () => {
    expect(render(<QuestionnaireRadioButtons />)).toBeTruthy();
  });
});
