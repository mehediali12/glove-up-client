import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileFighters from "../../components/ProfileFighters/ProfileFighters";
import Navbar from "../../components/Navbar/Navbar";

const ProfilePage = (props) => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileFighters fightersList={props.fightersList} />
      <Navbar />
    </div>
  );
};

export default ProfilePage;
