import "./sidebar.css";
import {
  // RssFeed,
  Home,
  Search,
  Notifications,
  Message,
  ListAlt,
  Bookmark,
  People,
  VerifiedUser,
  PersonOutline,
  MoreHorizOutlined
} from "@material-ui/icons";
// import HomeIcon from '@mui/icons-material/Home';

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            <span className="sidebarListItemText">Message</span>
          </li>
          <li className="sidebarListItem">
            <ListAlt className="sidebarIcon" />
            <span className="sidebarListItemText">List</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <People className="sidebarIcon" />
            <span className="sidebarListItemText">Communities</span>
          </li>
          <li className="sidebarListItem">
            <VerifiedUser className="sidebarIcon" />
            <span className="sidebarListItemText">Verified</span>
          </li>
          <li className="sidebarListItem">
            <PersonOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <MoreHorizOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">More</span>
          </li>
        </ul>
        
        <hr className="sidebarHr" />
        {/* <h3> Friends</h3>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}

        
      </div>
    </div>
  );
}
