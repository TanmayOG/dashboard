import CommonCard from "./CommonCard";

const InvestmentSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-2 mt-4">Investment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CommonCard
          title="ELSS Funds"
          description="Tax-Saving Investment with Growth Potential"
          maxInvestment="1,50,000.00"
          recommendation="75,000.00"
        />
        <CommonCard
          title="PPF"
          description="Secure, Long-Term Savings with Tax-Benefits"
          maxInvestment="1,50,000.00"
        />
      </div>
    </div>
  );
};

export default InvestmentSection;
