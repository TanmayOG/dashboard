const BannerButton = ({ children }) => {
  return (
    <button className="flex items-center gap-2 text-xs md:text-sm lg:text-lg text-white">
      {children}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="inline-block"
      >
        <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BannerButton;


