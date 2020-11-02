import React from "react";
import { render } from "@testing-library/react";

import { AppProvider } from '../../config'
import { Header } from "./Header";

describe("Header Component", () => {
  it("should render correctly", () => {
    const { container } = render(<AppProvider><Header /></AppProvider>);

    expect(container).toMatchSnapshot();
  });
});
