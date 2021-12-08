import { observer } from "mobx-react";
import React from "react";
import authStore from "../stores/authStore";

function Home() {
  return (
    <div>
      <h1>Welcome {authStore.user?.username} to your Home page</h1>
    </div>
  );
}

export default observer(Home);
