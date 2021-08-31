import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Dashboard } from "../../images/svgs/dashboard.svg";
import { ReactComponent as Apply } from "../../images/svgs/apply.svg";
import { ReactComponent as Keys } from "../../images/svgs/key.svg";
import { ReactComponent as Logout } from "../../images/svgs/logout.svg";
import { ReactComponent as Profile } from "../../images/svgs/profile.svg";
import { ReactComponent as Toggle } from "../../images/svgs/toggle.svg";
import { currentNode } from "../../js/CurrentLinkStyle";
import "../../style/main.css";

function SideBar({ toggle, setToggle }) {
  const sideBarTitle1 = useRef();
  const sideBarTitle2 = useRef();
  const history = useHistory();
  const sideBar = useRef();

  const toggleSidebars = () => {
    if (toggle) {
      sideBar.current.style.width = "15.3%";
      sideBarTitle1.current.style.textAlign = "left";
      sideBarTitle2.current.style.textAlign = "left";
      sideBarTitle1.current.style.paddingLeft = "32px";
      sideBarTitle2.current.style.paddingLeft = "32px";
    } else {
      sideBar.current.style.width = "7.1%";
      sideBarTitle1.current.style.textAlign = "center";
      sideBarTitle2.current.style.textAlign = "center";
      sideBarTitle1.current.style.paddingLeft = "";
      sideBarTitle2.current.style.paddingLeft = "";
    }

    setToggle();
  };

  const currentLink = (e) => {
    const id = currentNode(e).id;
    history.push({
      pathname:
        id === "dashboard" ? "/dashboard" : `/dashboard/${currentNode(e).id}`,
      state: { id, toggle },
    });
  };

  return (
    <div
      id="mySidebar"
      ref={sideBar}
      style={toggle ? { width: "7.1%" } : { width: "15.3%" }}
      className={toggle ? "sidebar" : "sidebar2"}
    >
      <a className="closebtn" onClick={toggleSidebars}>
        <Toggle />
      </a>
      <p
        style={
          toggle
            ? { textAlign: "center", paddingLeft: "" }
            : { textAlign: "left", paddingLeft: "32px" }
        }
        ref={sideBarTitle1}
      >
        LOAN
      </p>
      <a id="dashboard" className="anchor" onClick={currentLink}>
        <Dashboard /> {toggle ? "" : " Dashboard"}
      </a>
      <a id="apply" className="anchor" onClick={currentLink}>
        <Apply />
        {toggle ? "" : " Apply for a Loan "}
      </a>
      <a id="repay" className="anchor" onClick={currentLink}>
        <Apply />
        {toggle ? "" : " Repayments"}
      </a>
      <div
        style={toggle ? { marginTop: "75%" } : { marginTop: "30%" }}
        className="section-2"
      >
        <p
          style={
            toggle
              ? { textAlign: "center", paddingLeft: "" }
              : { textAlign: "left", paddingLeft: "32px" }
          }
          ref={sideBarTitle2}
        >
          SETTINGS
        </p>
        <a id="profile" className="anchor" onClick={currentLink}>
          <Profile />
          {toggle ? "" : " Profile"}
        </a>
        <a id="change-password" className="anchor" onClick={currentLink}>
          <Keys />
          {toggle ? "" : " Change Password"}
        </a>
      </div>
      <div className="logout">
        <Logout />
        {toggle ? "" : " Sign Out"}
      </div>
    </div>
  );
}

export default SideBar;
