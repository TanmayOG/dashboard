import Banner from "./Banner";
import ProfileSection from "./ProfileSection";

const DashboardHeader = () => {
  return (
    <div className="flex items-start gap-4 mx-auto py-3">
      <ProfileSection
        imageUrl="https://images.pexels.com/photos/30648970/pexels-photo-30648970/free-photo-of-refreshing-white-popsicle-on-blue-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Santosh Singh"
      />
      <Banner savings="3,46,950" />
    </div>
  );
};

export default DashboardHeader;
