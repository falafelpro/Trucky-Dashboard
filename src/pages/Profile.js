import { observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router";
import ProfileDetailsCard from "../components/ProfileDetailsCard";
import TruckProfileCard from "../components/TruckProfileCard";
import authStore from "../stores/authStore";
import truckStore from "../stores/truckStore";

function Profile() {
  const navigate = useNavigate();
  const oldtruck = truckStore.trucks.find(
    (truck) => truck.owner === authStore.user._id
  );
  console.log(oldtruck);
  //double check on what is the proper route
  if (!oldtruck) navigate("/");
  return (
    <div>
      <ProfileDetailsCard />
      <div className="row"></div>
      <TruckProfileCard oldtruck={oldtruck} />
    </div>
  );
}

export default observer(Profile);
