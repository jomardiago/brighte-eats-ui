import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { LeadForm } from "./lead-form";

export const NewLeadDialog = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Dialog open onOpenChange={handleClose}>
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
