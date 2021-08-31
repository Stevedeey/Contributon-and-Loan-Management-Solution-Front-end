import React, { useState, useEffect } from "react";
import NavDashboard from "../NavDashboard";
import SideBar from "../SideBar";
import { currentLinkStyle } from "../../js/CurrentLinkStyle";
import Mobile from "../Mobile";
import { useHistory } from "react-router-dom";

function Dashboard({ Content, status }) {
  const { toggle: isToggle, id } = status;
  const [toggle, setToggle] = useState(isToggle);
  const history = useHistory();

  useEffect(() => {
    setToggle(isToggle);

    if (id) currentLinkStyle(id);
  }, [isToggle, id]);

  const handleSideBarToggle = () => {
    setToggle((prev) => !prev);
    //updating history data while switching in sidebar
    history.replace({
      pathname: history.location.pathname,
      state: { id, toggle:!toggle },
    });
  };

  return (
    <div className="container-fluid">
      <div className="row content">
        <div className={toggle ? "col-sm-1 sidenav" : "col-sm-2 sidenav"}>
          <SideBar toggle={toggle} setToggle={handleSideBarToggle} />
        </div>
        <div className={toggle ? "col-sm-11" : "col-sm-10"}>
          <NavDashboard toggle={toggle} Mobile={<Mobile />} />
          <div>{Content}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
