import React from "react";
import profilePics from "../../images/no-image.jpeg";
import { ReactComponent as Tenten } from "../../images/svgs/TenTen.svg";
import { ReactComponent as Nofication } from "../../images/svgs/notification.svg";
import { ReactComponent as Drop } from "../../images/svgs/drop.svg";
import "../../style/main.css";

function NavDashboard({ Mobile }) {
  return (
    <>
      {/* Top Menu */}
      <div className="topnav">
        <div id="mobile">{Mobile}</div>
        {/* <a href="#">
          <>{Mobile}</>
        </a> */}
        <a href="#solution" >
          <Tenten /> <b>Solutions</b>
        </a>
        <div className="topnav-right">
          <a href="#notification">
            <Nofication />
          </a>
          <a href="#image">
            <img src={profilePics} alt="breeze" />
          </a>
          <a href="#user">John Deo <Drop /></a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NavDashboard;
