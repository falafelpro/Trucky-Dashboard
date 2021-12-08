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
    console.log(this.user);
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      console.log(res.data);
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
    // (Works but needs critic)this one remove the old token and update localStorage
    //with a token that contains the propatries that the user
    //has just updated
    localStorage.removeItem("myToken");
    const res = await api.put("/update-user-detail", userData);
    localStorage.setItem("myToken", res.data.token);
    this.setUser(res.data.token);
  };

  updateCredentials = async (userData) => {
    //(Havent test the logic) big brain gymnastic laila what im trying to do to update the old mytoken
    // this one i need to revisite the logic
    //what im looking to achive in the future is to
    //automaticly remove the token and sign the user out if the decited to change the password
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    const res = await api.put("/update-credentials", userData);
    console.log(res);
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
