import React from "react";
import Dashboard from "../../components/Dashboard";
import { useHistory } from "react-router-dom";
import Main from "./Main";

function RepaymentPage() {
  const history = useHistory();
  const { state } = history.location;

  return (
    <Dashboard
      Content={<Main />}
      status={state ? state : { id: "repay", toggle: true }}
    />
  );
}

export default RepaymentPage;
