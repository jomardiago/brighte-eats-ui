import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosApi } from "@/lib/axios";

import { LeadFormSchema, TService } from "../schemas";

type TCreateLeadResponse = {
  id: number;
  name: string;
  services: Array<TService>;
};

const createLead = (data: LeadFormSchema): Promise<TCreateLeadResponse> =>
  axiosApi
    .post("", {
      query:
        "mutation Register($input: RegisterLeadInput!) { register(input: $input) { id name services { type } } }",
      variables: {
        input: {
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          postcode: data.postcode,
          services: data.types,
        },
      },
    })
    .then((response) => response.data.data.register)
    .catch((error) => {
      throw error.response.data;
    });

export const useCreateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLead,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["leads"],
      }),
    onError: (error: { message: string }) => error,
  });
};
