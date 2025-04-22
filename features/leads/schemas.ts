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
