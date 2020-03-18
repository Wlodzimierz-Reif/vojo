import React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

describe("Button tests", () => {
  let testFunc;
  let component;

  beforeEach(() => {
    testFunc = jest.fn();
    component = shallow(<Button btnText= "test text" handleClick={testFunc}/>);
  })

  it("should render", () => {
    expect(render(component)).toBeTruthy();
  });
});
