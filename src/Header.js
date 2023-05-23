import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon style={{ fontSize: 28 }} className="header-icon" />

        <Link to="/">
          <img src="./logo.jpg" className="header-logo" />
        </Link>
      </div>

      <div className="header-middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />

        {/* <Link to={`/search/${inputSearch}`} className="header-input-icon"> */}
          <SearchIcon className="search-icon" />
        {/* </Link> */}
      </div>

      <div className="header-right">
        <VideocamIcon style={{ fontSize: 28 }} className="header-icon" />
        <AppsIcon style={{ fontSize: 28 }} className="header-icon" />
        <NotificationsIcon style={{ fontSize: 28 }} className="header-icon" />
        <Avatar
          alt="S"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F442%2F086%2Foriginal%2Fillustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg&tbnid=usLFMdEi7sJBEM&vet=12ahUKEwil3Kuimoz_AhVOHbcAHUe6DWEQMygAegUIARDnAQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fuser-icon&docid=E3VnjqP3ez2tMM&w=1920&h=1920&q=user%20logo&ved=2ahUKEwil3Kuimoz_AhVOHbcAHUe6DWEQMygAegUIARDnAQ"
          className="header-avatar"
        />
      </div>
    </div>
  );
}

export default Header;
