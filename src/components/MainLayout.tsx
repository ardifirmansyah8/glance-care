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
    <div className="bg-white md:w-2/3 w-full">
      <div className="flex flex-col gap-4 md:pb-4 md:px-0 p-2">
        <div className="flex items-center justify-between md:px-0 p-4">
          <div className="flex items-center gap-2">
            <Trophy className="md:h-8 md:w-8 text-yellow-500" />
            <Label className="md:text-2xl text-lg font-bold">
              Oscar Dashboard
            </Label>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="md:gap-4">
              <NavigationMenuItem
                className={clsx(
                  "md:px-4 px-2 py-3 hover:text-blue-400",
                  pathname === "/" ? "text-blue-400" : ""
                )}
              >
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Home className="md:h-8 md:w-8" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={clsx(
                  "md:px-4 px-2 py-3 hover:text-blue-400",
                  pathname === "/movies" ? "text-blue-400" : ""
                )}
              >
                <Link href="/movies" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <Clapperboard className="md:h-8 md:w-8" />
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
