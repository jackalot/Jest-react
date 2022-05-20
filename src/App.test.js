import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import React from "react";

describe("App component", () => {
  it("remders, magnificent monkeys", () => {
    // since screen does not have the container propery, we'll destructure render to obtain container for this test
    const { container } = render(<App></App>);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", () => {
    render(<App></App>);
    const button = screen.getByRole("button", { name: "Click Me" });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
