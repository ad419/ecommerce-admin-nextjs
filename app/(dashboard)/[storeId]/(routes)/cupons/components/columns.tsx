"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type CuponColumn = {
  id: string;
  name: string;
  value: string;
  countdown: any;
  code: string;
  activated: boolean;
  createdAt: string;
  expiresAt: string;
};

export const columns: ColumnDef<CuponColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "expiresAt",
    header: "Expires At",
  },
  {
    accessorKey: "countdown",
    header: "Countdown ",
  },
  {
    accessorKey: "activated",
    header: "Activated ",
  },
  {
    accessorKey: "code",
    header: "Code ",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
