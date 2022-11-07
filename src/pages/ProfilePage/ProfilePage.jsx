import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileFighters from "../../components/ProfileFighters/ProfileFighters";
import Navbar from "../../components/Navbar/Navbar";

const ProfilePage = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileFighters />
      <Navbar />
    </div>
  );
};

export default ProfilePage;
