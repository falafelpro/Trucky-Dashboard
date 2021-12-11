import React from "react";
import { makeAutoObservable } from "mobx";
import api from "./api";

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
}

const truckStore = new TruckStore();
truckStore.fetchTrucks();

export default truckStore;
