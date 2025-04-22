import { ServiceType, TLead } from "./schemas";

export const generateChartData = (leads: Array<TLead>) => {
  const serviceCounts: Record<ServiceType, number> = {
    [ServiceType.DELIVERY]: 0,
    [ServiceType.PICK_UP]: 0,
    [ServiceType.PAYMENT]: 0,
  };

  leads.forEach((lead) => {
    lead.services.forEach((service) => {
      const serviceType = service.type as ServiceType;

      if (serviceType in serviceCounts) {
        serviceCounts[serviceType] += 1;
      }
    });
  });

  const chartData = Object.entries(serviceCounts).map(
    ([serviceType, count]) => {
      return {
        service: serviceType,
        total: count,
        fill: `var(--color-${serviceType})`,
      };
    }
  );

  return chartData;
};
