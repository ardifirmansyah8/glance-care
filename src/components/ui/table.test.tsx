import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Table } from "./table";

describe("Table Component", () => {
  it("renders the Table component", () => {
    render(<Table data-testid="table" />);

    const tableElement = screen.getByTestId("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("applies custom class names to the Table component", () => {
    render(<Table data-testid="table" className="custom-class" />);

    const tableElement = screen.getByTestId("table");
    expect(tableElement).toHaveClass("custom-class");
  });
});
