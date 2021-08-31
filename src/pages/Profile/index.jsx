import React from "react";
import Dashboard from "../../components/Dashboard";
import { useHistory } from "react-router-dom";
import Main from "./Main";

function ProfilePage() {
  const history = useHistory();
  const { state } = history.location;

  return (
    <Dashboard
      Content={<Main />}
      status={state ? state : { id: "profile", toggle: true }}
    />
  );
}

export default ProfilePage;
