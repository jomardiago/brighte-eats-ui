"use client";

import { Loader } from "lucide-react";

import { useLeads } from "../apis/use-leads";
import { leadColumns } from "./lead-columns";
import { LeadsDataTable } from "./leads-data-table";

export const Leads = () => {
  const leads = useLeads();

  if (leads.isLoading) {
    return (
      <div className="mt-8 flex w-full justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <LeadsDataTable columns={leadColumns} data={leads.data || []} />
    </div>
  );
};
