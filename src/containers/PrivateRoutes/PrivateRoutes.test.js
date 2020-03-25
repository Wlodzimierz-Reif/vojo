import React from "react";
import PrivateRoutes from "./PrivateRoutes";

describe("PrivateRoutes tests", () => {
    it('should render', () => {
      expect(render(<PrivateRoutes />)).toBeTruthy();
    });
  });
