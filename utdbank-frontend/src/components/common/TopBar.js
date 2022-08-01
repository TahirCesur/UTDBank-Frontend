import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

const TopBar = () => {
  // const { userState } = useContext();
  // const { user, isUserLogin } = userState;

  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>
          <div className="navbar-option">
          <div className="navbar-option-item">
            <UserMenu/>
            </div>
        </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;