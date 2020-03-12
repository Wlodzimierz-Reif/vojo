import React from "react";
import SidePanel from "./SidePanel";
import { render } from "@testing-library/react";

describe("SidePanel tests", () => {
  it("should render", () => {
    expect(render(<SidePanel />)).toBeTruthy();
  });
});
