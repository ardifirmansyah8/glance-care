"use client";

import { Clapperboard, Home, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="bg-white w-2/3">
      <div className="flex flex-col gap-4 pb-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-3xl font-bold flex items-center gap-2">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <Label className="text-2xl font-bold">Oscar Dashboard</Label>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem
                className={clsx(
                  "px-4 py-3 hover:text-blue-400",
                  pathname === "/" ? "text-blue-400" : ""
                )}
              >
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Home className="h-8 w-8" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={clsx(
                  "px-4 py-3 hover:text-blue-400",
                  pathname === "/movies" ? "text-blue-400" : ""
                )}
              >
                <Link href="/movies" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Clapperboard className="h-8 w-8" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {children}
      </div>
    </div>
  );
}
