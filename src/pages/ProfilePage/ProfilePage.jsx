import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileFighters from "../../components/ProfileFighters/ProfileFighters";

const ProfilePage = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileFighters />
    </div>
  );
};

export default ProfilePage;
