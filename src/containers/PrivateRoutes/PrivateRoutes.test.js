import React from "react";
import PrivateRoutes from "./PrivateRoutes";

import { render } from "@testing-library/react";

describe('PrivateRouting tests', () => {
	it('should render', () => {
		expect(render(<PrivateRoutes />)).toBeTruthy();
	});
});
