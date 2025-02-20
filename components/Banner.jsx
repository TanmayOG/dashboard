import BannerButton from "./BannerButton";

const Banner = ({ savings }) => {
    return (
      <div className="flex-1 bg-black text-white rounded-md h-36 p-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-xs md:text-sm lg:text-lg font-medium">
            Unlock Tax Savings Up to ₹{savings}
          </p>
          <p className="text-xs md:text-sm lg:text-lg">
            -Prisha, Your AI Wealth Expert.
          </p>
        </div>
        <div className="mt-3 md:mt-0"></div>
        <BannerButton>Start Planning</BannerButton>
      </div>
    );
};

export default Banner;