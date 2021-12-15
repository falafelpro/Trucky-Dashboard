import { makeAutoObservable } from "mobx";
import api from "./api";

class MenuStore {
  dishes = [];

  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTruckDishes = async (truckId) => {
    try {
      const response = await api.get(`/trucks/${truckId}/dishes`);
      this.dishes = response.data;
    } catch (error) {
      console.error("MenuStore -> fetchDishes -> error", error);
    }
  };

  fetchDishes = async () => {
    try {
      const response = await api.get(`/menu`);
      this.dishes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("MenuStore -> fetchDishes -> error", error);
    }
  };

  createDish = async (dish, truckId) => {
    try {
      const formData = new FormData();
      for (const key in dish) {
        formData.append(key, dish[key]);
      }
      const response = await api.post(`/trucks/${truckId}/dishes`, formData);
      this.dishes.push(response.data);
    } catch (error) {
      console.error("MenuStore -> createDish -> error", error);
    }
  };

  updateDish = async (updatedDish, dishId) => {
    try {
      const formData = new FormData();
      for (const key in updatedDish) formData.append(key, updatedDish[key]);
      const res = await api.put(`/menu/${dishId}`, formData);
      this.dishes = this.dishes.map((dish) =>
        dish._id === dishId ? res.data : dish
      );
      console.log(this.dishes);
    } catch (error) {
      console.log("menuStore -> updatedish -> error", error);
    }
  };

  deleteDish = async (id) => {
    try {
      await api.delete(`/menu/${id}`);
      this.dishes = this.dishes.filter((dish) => dish._id !== id);
    } catch (error) {
      console.error("Jam3yaStore -> deleteJam3ya -> error", error);
    }
  };
}
const menuStore = new MenuStore();
menuStore.fetchDishes();
export default menuStore;
