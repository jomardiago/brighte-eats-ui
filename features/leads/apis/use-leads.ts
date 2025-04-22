import { useQuery } from "@tanstack/react-query";

import { axiosApi } from "@/lib/axios";

import { TLead } from "../schemas";

const findLeads = (): Promise<TLead[]> =>
  axiosApi
    .post("", {
      query:
        "query Leads { leads { createdAt email id mobile name postcode services { id type } } }",
    })
    .then((response) => response.data.data.leads)
    .catch((error) => {
      throw error.response.data;
    });

export const useLeads = () =>
  useQuery({
    queryKey: ["leads"],
    queryFn: findLeads,
  });
