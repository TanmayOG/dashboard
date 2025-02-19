"use client";
import BalanceCard from "@/components/BalanceCard";
import IncomeTaxComparison from "@/components/IncomeTaxChart";
import InvestmentSection from "@/components/InvestmentSection";
import TaxSummary from "@/components/TaxSummaryChart";
import LoanSection from "@/components/LoanCard";
import InsuranceCard from "@/components/InsuranceCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import DashboardHeader from "@/components/DashboardHeader";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const overview = searchParams.get("overview");
  const investmentRef = useRef(null);
  const loanRef = useRef(null);
  const insuranceRef = useRef(null);
  const overviewRef = useRef(null);

  useEffect(() => {
    if (overview) {
      const refs = {
        investment: investmentRef,
        loan: loanRef,
        insurance: insuranceRef,
        overview: overviewRef,
      };

      const targetRef = refs[overview];
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [overview]);
  return (
    <div className="h-screen flex flex-col bg-white text-black">
      <div className="flex-none p-8">
        <DashboardHeader />
        <h1 className="mt-5">
          <span className="text-xl font-bold">Financial Overview</span>
        </h1>
        <div className="w-full h-[1.5px] bg-gray-200 mt-4"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 pb-10">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mx-auto py-3">
            <div className="space-y-8">
              <BalanceCard title="Income" amount="1,80,000.00" />
              <BalanceCard title="Deductions" amount="3,50,000.00" />
              <BalanceCard title="Exemptions" amount="83,000.00" />
            </div>
            <div className="h-full">
              <TaxSummary />
            </div>
            <div className="h-full">
              <IncomeTaxComparison />
            </div>
          </div>

          <div ref={investmentRef}>
            <InvestmentSection />
          </div>

          <div ref={loanRef}>
            <LoanSection />
          </div>

          <div ref={insuranceRef}>
            <InsuranceCard />
          </div>
        </div>
      </div>
    </div>
  );
}
