import React from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Main from "./Main";

function DashboardPage() {
  const history = useHistory();
  const { state } = history.location;

  return (
    <Dashboard
      Content={<Main />}
      status={state ? state : { id: "dashboard", toggle: true }}
    />
  );
}

export default DashboardPage;
