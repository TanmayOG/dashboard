import CommonCard from "./CommonCard";

const InsuranceCard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-2 mt-4">Insurance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CommonCard
          title="Home Loan"
          description="Turn Your Dream Home into Reality with Easy Financing"
          maxInvestment="1,50,000.00"
          recommendation="75,000.00"
        />
        <CommonCard
          title="Education Loan"
          description="Secure Your Family’s Future with Financial Protection"
          maxInvestment="1,50,000.00"
        />
      </div>
    </div>
  );
};

export default InsuranceCard;
