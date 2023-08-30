"use client";

import * as React from "react";
import {
  CalendarIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
  IdCardIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import NextLink from "next/link";
import { useRouter, useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SearchBar({
  products,
  className,
}: {
  products: any[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const currentUrl = window.location.pathname;

    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push(
          routes.find((route) => route.label === "Settings")?.href || ""
        );
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  React.useEffect(() => {
    const currentUrl = window.location.pathname;

    const down = (e: KeyboardEvent) => {
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push(
          routes.find((route) => route.label === "Products")?.href || ""
        );
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  return (
    <div
      className={cn(
        "bg-slate-300 bg-opacity-10 p-3 max-h-[40px] flex items-center justify-center rounded-lg cursor-pointer hover:bg-opacity-20",
        className
      )}
    >
      <p
        className="text-sm text-muted-foreground
            lg:truncate
        "
        onClick={() => setOpen(true)}
      >
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the search palette.
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            <CommandItem onClick={() => setOpen(false)}>
              <NextLink href={`/${params.storeId}`} className="flex">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Overview</span>
              </NextLink>
            </CommandItem>
            <CommandItem onClick={() => setOpen(false)}>
              <NextLink href={`/${params.storeId}/billboards`} className="flex">
                <IdCardIcon className="mr-2 h-4 w-4" />
                <span>Billboard</span>
              </NextLink>
            </CommandItem>
            <CommandItem onClick={() => setOpen(false)}>
              <NextLink href={`/${params.storeId}/orders`} className="flex">
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Orders</span>
              </NextLink>
            </CommandItem>
            <CommandItem onClick={() => setOpen(false)}>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ArchiveIcon className="mr-2 h-4 w-4" />
              <span>Poroducts</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Top Products">
            {products.map((product) => (
              <CommandItem key={product.id}>
                <NextLink href={`/${params.storeId}/products/${product.id}`}>
                  <span>{product.name}</span>
                </NextLink>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
