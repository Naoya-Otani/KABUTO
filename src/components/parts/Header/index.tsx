"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "投資銀行IBD",
    href: "/courses/investment-banking",
    description: "投資銀行IBD",
  },
  {
    title: "コンサルティング",
    href: "/courses/consulting",
    description: "コンサルティング",
  },
  {
    title: "テック",
    href: "/courses/tech",
    description: "テック",
  },
  {
    title: "総合商社",
    href: "/courses/general-trading-company",
    description: "総合商社",
  },
  {
    title: "メーカー",
    href: "/courses/manufacturer",
    description: "メーカー",
  },
  {
    title: "広告代理店",
    href: "/courses/ad-agency",
    description: "広告代理店",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>フォーラム</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="h-6 w-6 bg-slate-300 block" />
                    <div className="mb-2 mt-4 text-lg font-medium">KABUTO</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      知りたい情報にアクセスできる就活プラットフォーム
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/forum/popular" title="Popular">
                みんながよく見る
              </ListItem>
              <ListItem href="/forum/trending" title="Trending">
                トレンド
              </ListItem>
              <ListItem href="/forum/new" title="New">
                最新
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>コース</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ダッシュボード
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const index = () => {
  return (
    <header className="w-full h-20 px-16 flex items-center justify-between border-b">
      <p className="font-bold text-lg tracking-widest">KABUTO</p>
      <NavigationMenuDemo />
    </header>
  );
};

export default index;
