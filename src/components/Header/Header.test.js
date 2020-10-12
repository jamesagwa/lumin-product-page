import React from "react";

import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Component", () => {
  it("should render correctly", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
