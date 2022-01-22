import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

const User = ({ user }) => {
  if (user && user.name) {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Update User</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={user.picture.large} alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.name.first}</span>
                <span>{user.name.last}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{user.login.username}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {user.dob.age} year's old
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{user.phone}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {user.location.city} | {user.location.country}
                </span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Update</span>
            <div className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <div className="userUpdateInput">{user.login.username}</div>
                </div>
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <div className="userUpdateInput">{user.name.first}</div>
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <div className="userUpdateInput">{user.name.last}</div>
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <div className="userUpdateInput">{user.email}</div>
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <div className="userUpdateInput">{user.phone}</div>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={user.picture.large}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default User;
