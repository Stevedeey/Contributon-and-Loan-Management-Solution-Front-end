import React from "react";
import Dashboard from "../../components/Dashboard";
import { useHistory } from "react-router-dom";
import Info from "./info.jsx";

function LoanPage() {
  const history = useHistory();
  const { state } = history.location;

  return (
    <Dashboard
      Content={<Info />}
      status={state ? state : { id: "apply", toggle: true }}
    />
  );
}

export default LoanPage;
