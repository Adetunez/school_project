import React from "react";
import { FiSettings } from "react-icons/fi";
import { RiDashboardFill, RiGitRepositoryLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import logo from "../../assets/image/logo.jpg";
const DBNavbar = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    nav("/login");
  };
  const PATH = window.location.pathname;
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" width={50} height={50} />
        <h1>hriscrown Farm</h1>
      </div>
      <ul>
        <li className={PATH === ROUTES.DASHBOARD ? "active" : ""}>
          <Link to={ROUTES.DASHBOARD}>
            <RiDashboardFill
              size={25}
              color={PATH === ROUTES.DASHBOARD ? "#fff" : ""}
            />
            Dashboard
          </Link>
        </li>
        <li className={PATH === ROUTES.PAYMENTS ? "active" : ""}>
          <Link to={ROUTES.PAYMENTS}>
            <RiGitRepositoryLine
              size={25}
              color={PATH === ROUTES.PAYMENTS ? "#fff" : ""}
            />{" "}
            Payment
          </Link>
        </li>
        <li className={PATH === ROUTES.PROFILE ? "active" : ""}>
          <Link to={ROUTES.PROFILE}>
            <MdOutlineVerifiedUser
              size={25}
              color={PATH === ROUTES.PROFILE ? "#fff" : ""}
            />{" "}
            Profile
          </Link>
        </li>
        <li onClick={handleLogout}>
          <Link to="#">
            <BiLogOut size={25} color={"red"} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DBNavbar;
