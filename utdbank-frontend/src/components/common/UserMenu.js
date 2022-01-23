import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "../../context";
import { loginLogout } from "../../context/user/userActions";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
//import alertify from "alertifyjs";

const UserMenu = () => {
  const { userState, dispatchUser } = useContext();
  const { user, isUserLogin } = userState;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchUser(loginLogout());
    localStorage.removeItem("token");
    navigate("/");

    // alertify.confirm(
    //   "Logout",
    //   "Are you sure want to logout?",
    //   () => {
    //     dispatchUser(loginLogout());
    //     localStorage.removeItem("token");
    //     navigate("/");
    //   },
    //   () => {
    //     console.log("canceled");
    //   }
    // );
  };

  return (
    <>
      {isUserLogin ? (
        <DropdownButton id="dropdown-basic-button" title={`${user.firstName} ${user.lastName}`} size="sm" align="end">
          <Dropdown.Item as={Link} to="">
            Account Details
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/profile">
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="">
            Money Transfer
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <div className="navbar-option">
          <div className="navbar-option-item">
            <Link to="/auth" className="btn1 blue-gradient btn-with-image text-nowrap">
              <i className="flaticon-login"></i>
              Sign Up / Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
