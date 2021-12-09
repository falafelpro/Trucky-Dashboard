import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
      if (!this.user) return false;
      return true;
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
      return false;
    }
  };

  signout = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  updateUserDetail = async (userData) => {
    localStorage.removeItem("myToken");
    const res = await api.put("/update-user-detail", userData);
    localStorage.setItem("myToken", res.data.token);
    this.setUser(res.data.token);
  };

  updateCredentials = async (userData) => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    const res = await api.put("/update-credentials", userData);
    localStorage.setItem("myToken", res.data.token);
    this.setUser(res.data.token);
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
