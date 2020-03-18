import React from "react";
import InputField from "./InputField";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

describe("InputField tests", () => {
  let testFunc;
  let component;

  beforeEach(() => {
    testFunc = jest.fn();
    component = shallow(
      <InputField
        type="testInput"
        name="testName"
        placeholder="testText"
        handleInput={testFunc}
      />
    );
  });

  it("should render", () => {
    expect(render(component)).toBeTruthy();
  });

  it("should render the correct placeholder text", () => {
    expect(
      component
        .find("input")
        .at(0)
        .props().placeholder
    ).toEqual("testText");
  });
});
