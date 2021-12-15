import { makeObservable, observable, action } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class TruckStore {
  constructor() {
    makeObservable(this, {
      trucks: observable,
      fetchTrucks: action,
      updateTruck: action,
      checkForTruck: action,
    });
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

  updateTruck = async (updatedTruck, truckId) => {
    try {
      console.log(updatedTruck);
      const formData = new FormData();
      for (const key in updatedTruck) formData.append(key, updatedTruck[key]);
      console.log(updatedTruck);
      const res = await api.put(`/trucks/${truckId}`, JSON.stringify(formData));
      console.log(res);
      this.trucks = this.trucks.map((truck) =>
        truck._id === truckId ? res.data.updatedTruck : truck
      );
    } catch (error) {
      console.log("menuStore -> updatedish -> error", error);
    }
  };

  checkForTruck = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      console.log(user);
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
