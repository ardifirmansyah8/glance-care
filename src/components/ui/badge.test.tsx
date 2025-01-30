import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Badge, badgeVariants } from "./badge";
import { cn } from "@/lib/utils";

describe("Badge Component", () => {
  it("renders the Badge component with default variant", () => {
    render(<Badge data-testid="badge">Default Badge</Badge>);

    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(
      cn(
        badgeVariants({ variant: "default" }),
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )
    );
    expect(badgeElement).toHaveTextContent("Default Badge");
  });

  it("renders the Badge component with secondary variant", () => {
    render(
      <Badge data-testid="badge" variant="secondary">
        Secondary Badge
      </Badge>
    );

    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(
      cn(
        badgeVariants({ variant: "secondary" }),
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )
    );
    expect(badgeElement).toHaveTextContent("Secondary Badge");
  });

  it("renders the Badge component with destructive variant", () => {
    render(
      <Badge data-testid="badge" variant="destructive">
        Destructive Badge
      </Badge>
    );

    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(
      cn(
        badgeVariants({ variant: "destructive" }),
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )
    );
    expect(badgeElement).toHaveTextContent("Destructive Badge");
  });

  it("renders the Badge component with outline variant", () => {
    render(
      <Badge data-testid="badge" variant="outline">
        Outline Badge
      </Badge>
    );

    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(
      cn(
        badgeVariants({ variant: "outline" }),
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )
    );
    expect(badgeElement).toHaveTextContent("Outline Badge");
  });

  it("applies custom class names to the Badge component", () => {
    render(
      <Badge data-testid="badge" className="custom-class">
        Custom Badge
      </Badge>
    );

    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toHaveClass("custom-class");
  });
});
