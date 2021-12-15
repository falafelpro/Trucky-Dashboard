import { observer } from "mobx-react";
import React from "react";
import authStore from "../stores/authStore";
import truckStore from "../stores/truckStore";

function Home() {
  const truck = truckStore.trucks.find(
    (truck) => truck.owner === authStore.user._id
  );
  console.log(truck);
  return (
    <div>
      <h1>Welcome {authStore.user?.username} to your Home page</h1>
    </div>
  );
}

export default observer(Home);
