const BalanceCard = ({ title, amount }) => {
  return (
    <div className="bg-black text-white rounded-2xl w-full sm:w-[200px] md:w-[200px] lg:w-[330px]">
      <div className="flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4">
        <span className="text-white font-bold text-xs sm:text-sm">{title}</span>
      </div>

      <div className="w-full h-[1.5px] bg-gray-800"></div>

      <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3">
        <span className="text-lg sm:text-xl font-bold">₹ {amount}</span>
        <span className="text-[10px] sm:text-xs text-white hover:text-gray-300 cursor-pointer transition-colors">
          Claim Now
        </span>
      </div>
    </div>
  );
};

export default BalanceCard;
