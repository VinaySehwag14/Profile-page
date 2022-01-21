import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DashboardIcon className="sidebarIcon" />
              Dashboard
            </li>
            <li className="sidebarListItem active">
              <PersonIcon className="sidebarIcon" />
              Profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
