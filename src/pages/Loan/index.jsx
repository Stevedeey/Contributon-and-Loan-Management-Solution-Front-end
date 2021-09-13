import React from "react";
import Dashboard from "../../components/Dashboard";
import { useHistory } from "react-router-dom";
// import Info from "./info.jsx";
import Apply from "./apply";

function LoanPage() {
  const history = useHistory();
  const { state } = history.location;

  return (
    <Dashboard
      Content={<Apply />}
      status={state ? state : { id: "apply", toggle: true }}
    />
  );
}

export default LoanPage;
