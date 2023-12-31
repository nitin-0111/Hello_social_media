import "./closeFriend.css";
import { Link } from "react-router-dom";
export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <Link to={"/profile/" + user.username} style={{ textDecoration: "none" }}>
        <img
          className="sidebarFriendImg"
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
        />
        <span className="sidebarFriendName">{user.username}</span>
      </Link>
    </li>
  );
}
