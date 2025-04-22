import { z } from "zod";

export enum ServiceType {
  DELIVERY = "DELIVERY",
  PICK_UP = "PICK_UP",
  PAYMENT = "PAYMENT",
}

export type TService = {
  id: string;
  type: ServiceType;
};

export type TLead = {
  createdAt: string;
  email: string;
  id: number;
  mobile: string;
  name: string;
  postcode: string;
  services: Array<TService>;
};

export const formSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  mobile: z.string().min(1, {
    message: "Mobile number is required",
  }),
  postcode: z.string().min(1, {
    message: "Post code is required",
  }),
  types: z.array(z.nativeEnum(ServiceType)).min(1, {
    message: "Select at least one service type",
  }),
});

export type LeadFormSchema = z.infer<typeof formSchema>;
