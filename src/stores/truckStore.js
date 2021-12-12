import React from "react";
import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class TruckStore {
  constructor() {
    makeAutoObservable(this);
  }
  trucks = [];
  isLoading = true;
  fetchTrucks = async () => {
    try {
      const res = await api.get("/trucks");
      this.trucks = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log("TruckStore -> fetchTrucks -> error", error);
    }
  };

  checkForTruck = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (user.truck) {
        return user.truck;
      } else {
        return null;
      }
    }
  };
}

const truckStore = new TruckStore();
truckStore.fetchTrucks();

export default truckStore;
