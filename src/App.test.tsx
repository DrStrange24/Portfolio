import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders portfolio navigation", () => {
  render(<App />);
  const brandElement = screen.getByText(/portfolio/i);
  expect(brandElement).toBeInTheDocument();
});
