const ProfileSection = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col h-36 p-3 gap-2 items-center">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover"
      />
      <p className="text-xs text-gray-600 mt-1">Welcome back!</p>
      <h1 className="text-xl font-medium">{name}</h1>
    </div>
  );
};

export default ProfileSection;