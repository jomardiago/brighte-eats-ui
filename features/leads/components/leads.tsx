"use client";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useLeads } from "../apis/use-leads";
import { leadColumns } from "./lead-columns";
import { LeadsDataTable } from "./leads-data-table";
import { NewLeadDialog } from "./new-lead-dialog";

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
      <div className="mb-4 flex w-full justify-end">
        <Button>New Lead</Button>
      </div>
      <div>
        <LeadsDataTable columns={leadColumns} data={leads.data || []} />
      </div>

      <NewLeadDialog />
    </div>
  );
};
