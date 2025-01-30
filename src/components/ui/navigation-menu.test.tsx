import * as React from "react";
import { render, screen } from "@testing-library/react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
} from "./navigation-menu";

describe("NavigationMenu Component", () => {
  it("renders the NavigationMenu component", () => {
    render(
      <NavigationMenu data-testid="navigation-menu">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const navigationMenuElement = screen.getByTestId("navigation-menu");
    expect(navigationMenuElement).toBeInTheDocument();
  });

  it("applies custom class names to the NavigationMenu component", () => {
    render(
      <NavigationMenu data-testid="navigation-menu" className="custom-class">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const navigationMenuElement = screen.getByTestId("navigation-menu");
    expect(navigationMenuElement).toHaveClass("custom-class");
  });
});
