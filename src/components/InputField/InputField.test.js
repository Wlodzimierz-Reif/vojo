import React from "react";
import InputField from "./InputField";
import { render } from "@testing-library/react";

describe("InputField tests", () => {
  it("should render", () => {
    expect(render(<InputField />)).toBeTruthy();
  });
});
