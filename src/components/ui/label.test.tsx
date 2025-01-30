import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Label } from "./label";

describe("Label Component", () => {
  it("renders the Label component with default class names", () => {
    render(<Label data-testid="label">Test Label</Label>);

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent("Test Label");
  });

  it("applies custom class names to the Label component", () => {
    render(
      <Label data-testid="label" className="custom-class">
        Custom Label
      </Label>
    );

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toHaveClass("custom-class");
  });
});
