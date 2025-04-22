import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { LeadForm } from "./lead-form";

export const NewLeadDialog = () => {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new lead</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <LeadForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
