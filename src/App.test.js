import React from "react";
import { render } from "@testing-library/react";
import App from "./App.jsx";
// test

test("renders learn react link", () => {
  expect(render(<App />)).toBeTruthy();
});
