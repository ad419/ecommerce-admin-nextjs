"use client";
// build bottom tab bar for mobile

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function TabBar() {
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
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
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

  return (
    <div
      className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700
    bg-white dark:bg-black shadow-2xl shadow-cyan-400 rounded-t-lg
    "
    >
      <ul className="flex flex-wrap -mb-px">
        {routes.slice(0, 4).map((route) => (
          <li className="mr-2">
            <Link
              href={route.href}
              className={cn(
                route.active
                  ? "text-blue-500 border-blue-500 dark:text-blue-500 dark:border-blue-500"
                  : "text-gray-400 dark:text-white dark:border-gray-100",
                "inline-block p-3 border-b-2 rounded-t-lg active "
              )}
              aria-current="page"
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
