import React from "react";
import PrivateRoutes from "./PrivateRoutes";

import { render } from '@testing-library/react';

describe("PrivateRoutes tests", () => {
    it('should render', () => {
      expect(render(<PrivateRoutes />)).toBeTruthy();
    });
  });
