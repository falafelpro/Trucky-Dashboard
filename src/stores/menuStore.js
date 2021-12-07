import { makeAutoObservable } from "mobx";
import api from "./api";

class MenuStore {
  dishes = [];

  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchDishes = async () => {
    try {
      const response = await api.get("/menu");
      this.dishes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("MenuStore -> fetchDishes -> error", error);
    }
  };

  createDish = async (dish) => {
    try {
      console.log(dish);
      const formData = new FormData();
      for (const key in dish) {
        formData.append(key, dish[key]);
      }
      const response = await api.post("/menu", formData);
      this.recipes.push(response.data);
    } catch (error) {
      console.error("CategoryStore -> createCategory -> error", error);
    }
  };
}
const menuStore = new MenuStore();
menuStore.fetchDishes();
export default menuStore;