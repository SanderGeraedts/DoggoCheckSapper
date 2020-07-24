import Cookies from "js-cookie";

export default class Auth {
  static beforeChange(from, to, redirect, params, query) {
    if (
      !Auth.isUserAuthenticated() &&
      (to !== "/login" && to !== "/register")
    ) {
      redirect("/login");
    }
  }

  static isUserAuthenticated() {
    return Cookies.get("auth") ? true : false;
  }

  static setAuthToken(token) {
    Cookies.set("auth", token);
  }

  static getAuthToken() {
    return Cookies.get("auth");
  }

  static logOut() {
    Cookies.remove("auth");
  }
}
