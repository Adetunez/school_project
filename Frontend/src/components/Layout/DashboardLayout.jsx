import React from "react";
import "./Styles.scss";
import { DBHeader, DBNavbar } from "../../components";
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <DBNavbar />
      <DBHeader />
      <div className="container">{children}</div>
    </div>
  );
};

export default DashboardLayout;
