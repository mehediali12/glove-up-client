import fznLogo from "../../assets/images/fzn.jpg";
import "./ProfileHeader.scss";
import Settings from "../../assets/icons/settings.svg";
import Message from "../../assets/icons/message.svg";

const ProfileHeader = () => {
  return (
    <div className="p-header">
      <div className="p-header__info">
        <div>
          <img className="p-header__pfp" src={fznLogo} alt="profile image" />
        </div>
        <h1 className="p-header__name">Fightzone</h1>
        <p className="p-header__username">@fightzone</p>
        <p className="p-header__address">16-22 Pritchard's Rd, London E2 9AP</p>
        <button className="p-header__message-btn">
          <img
            className="p-header__message-icon"
            src={Message}
            alt="message icon for button"
          />
          Message
        </button>
      </div>
      <img className="p-header__settings" src={Settings} alt="settings icon" />
    </div>
  );
};

export default ProfileHeader;
