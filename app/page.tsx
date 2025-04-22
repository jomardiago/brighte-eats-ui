import { Leads } from "@/features/leads/components/leads";

export default function Home() {
  return (
    <div className="mt-8 w-full text-center">
      <h1 className="text-2xl font-semibold">Brighte Eats - Leads Report</h1>
      <Leads />
    </div>
  );
}
