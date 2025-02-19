const CommonCard = ({
  title,
  description,
  maxInvestment,
  recommendation,
}) => {
  return (
    <div className="bg-black rounded-xl p-6 h-full">
      <div className="mb-8">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">Max Investment</p>
          <p className="text-white text-lg font-semibold">₹ {maxInvestment}</p>
        </div>
        {recommendation && (
          <div>
            <p className="text-gray-400 text-sm mb-1">Pie Recommendation</p>
            <p className="text-white text-lg font-semibold">
              ₹ {recommendation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;


