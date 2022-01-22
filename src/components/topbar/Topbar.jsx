import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Topbar = ({ image }) => {
  const { picture } = image;

  if (picture && picture.medium) {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="heading">My Profile</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsIcon />
              <span className="topIconBadge">2</span>
            </div>
            <img src={image.picture.medium} alt="aatar" className="topAvatar" />
            <div className="topbarIconContainer">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Topbar;
