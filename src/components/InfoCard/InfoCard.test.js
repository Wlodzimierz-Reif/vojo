import React from "react";
import InfoCard from "./InfoCard";
import { render } from "@testing-library/react";

describe("InfoCard tests", () => {
  it("should render", () => {
    expect(render(<InfoCard />)).toBeTruthy();
  });
});
