"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { ServiceType, TLead } from "../schemas";

const getServiceLabel = (service: ServiceType) => {
  switch (service) {
    case ServiceType.DELIVERY:
      return "Delivery";
    case ServiceType.PAYMENT:
      return "Payment";
    case ServiceType.PICK_UP:
      return "Pick Up";
    default:
      return "Invalid Service";
  }
};

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
        <div className="flex gap-2">
          {row.original.services.map((service) => (
            <Badge key={service.id} variant="outline">
              {getServiceLabel(service.type)}
            </Badge>
          ))}
        </div>
      );
    },
  },
];
