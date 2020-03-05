import React from "react";
import PriorityBox from "./PriorityBox";
import { render } from "@testing-library/react";

const testObj = {
  priorityBoxNum: 1,
  priorityBoxHeading: "hello",
  priorityBoxLink: "hello"
};

describe("PriorityBox tests", () => {
  it("should render", () => {
    expect(render(<PriorityBox props={testObj} />)).toBeTruthy();
  });
});
