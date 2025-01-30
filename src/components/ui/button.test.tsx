import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

describe("Button Component", () => {
  it("renders the Button component with default variant and size", () => {
    render(<Button data-testid="button">Default Button</Button>);

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      cn(buttonVariants({ variant: "default", size: "default" }))
    );
    expect(buttonElement).toHaveTextContent("Default Button");
  });

  it("renders the Button component with destructive variant", () => {
    render(
      <Button data-testid="button" variant="destructive">
        Destructive Button
      </Button>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass(
      cn(buttonVariants({ variant: "destructive" }))
    );
    expect(buttonElement).toHaveTextContent("Destructive Button");
  });

  it("renders the Button component with outline variant", () => {
    render(
      <Button data-testid="button" variant="outline">
        Outline Button
      </Button>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass(
      cn(buttonVariants({ variant: "outline" }))
    );
    expect(buttonElement).toHaveTextContent("Outline Button");
  });

  it("renders the Button component with small size", () => {
    render(
      <Button data-testid="button" size="sm">
        Small Button
      </Button>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass(cn(buttonVariants({ size: "sm" })));
    expect(buttonElement).toHaveTextContent("Small Button");
  });

  it("renders the Button component with icon size", () => {
    render(
      <Button data-testid="button" size="icon">
        Icon Button
      </Button>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass(cn(buttonVariants({ size: "icon" })));
    expect(buttonElement).toHaveTextContent("Icon Button");
  });

  it("applies custom class names to the Button component", () => {
    render(
      <Button data-testid="button" className="custom-class">
        Custom Button
      </Button>
    );

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass("custom-class");
  });
});
