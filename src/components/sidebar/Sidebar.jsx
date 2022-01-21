import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@mui/icons-material";

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
            <li className="sidebarListItem">
              <PersonIcon className="sidebarIcon" />
              Profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
