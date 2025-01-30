import * as React from "react";
import { render, screen } from "@testing-library/react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { cn } from "@/lib/utils";

describe("Card Component", () => {
  it("renders the Card component with default class names and props", () => {
    render(<Card data-testid="card">Card Content</Card>);

    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass(
      cn("rounded-lg border bg-card text-card-foreground shadow-sm")
    );
    expect(cardElement).toHaveTextContent("Card Content");
  });

  it("renders the CardHeader component with default class names and props", () => {
    render(<CardHeader data-testid="card-header">Header Content</CardHeader>);

    const headerElement = screen.getByTestId("card-header");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass(cn("flex flex-col space-y-1.5 p-6"));
    expect(headerElement).toHaveTextContent("Header Content");
  });

  it("renders the CardTitle component with default class names and props", () => {
    render(<CardTitle data-testid="card-title">Title Content</CardTitle>);

    const titleElement = screen.getByTestId("card-title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(
      cn("text-2xl font-semibold leading-none tracking-tight")
    );
    expect(titleElement).toHaveTextContent("Title Content");
  });

  it("renders the CardDescription component with default class names and props", () => {
    render(
      <CardDescription data-testid="card-description">
        Description Content
      </CardDescription>
    );

    const descriptionElement = screen.getByTestId("card-description");
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass(cn("text-sm text-muted-foreground"));
    expect(descriptionElement).toHaveTextContent("Description Content");
  });

  it("renders the CardContent component with default class names and props", () => {
    render(<CardContent data-testid="card-content">Content</CardContent>);

    const contentElement = screen.getByTestId("card-content");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass(cn("p-6 pt-0"));
    expect(contentElement).toHaveTextContent("Content");
  });

  it("renders the CardFooter component with default class names and props", () => {
    render(<CardFooter data-testid="card-footer">Footer Content</CardFooter>);

    const footerElement = screen.getByTestId("card-footer");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass(cn("flex items-center p-6 pt-0"));
    expect(footerElement).toHaveTextContent("Footer Content");
  });

  it("applies custom class names to the Card component", () => {
    render(
      <Card data-testid="card" className="custom-class">
        Card Content
      </Card>
    );

    const cardElement = screen.getByTestId("card");
    expect(cardElement).toHaveClass("custom-class");
  });
});
