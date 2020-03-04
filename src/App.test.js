import React from "react";
import { render } from "@testing-library/react";
import App from "./App.jsx";

describe("App tests", () => {
  it("renders app", () => {
    expect(render(<App />)).toBeTruthy();
  });
});
