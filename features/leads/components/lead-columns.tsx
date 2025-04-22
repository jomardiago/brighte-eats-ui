"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { TLead } from "../schemas";

export const leadColumns: ColumnDef<TLead>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "postcode",
    header: "Post Code",
  },
  {
    accessorKey: "services",
    header: "Services",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-4">
          {row.original.services.map((service) => (
            <Badge key={service.id}>{service.type}</Badge>
          ))}
        </div>
      );
    },
  },
];
