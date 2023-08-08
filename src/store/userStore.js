import { extendObservable } from "mobx";

class UserStore {
  constructor() {
    extendObservable(this, {
      loading: true,
      isLoggedIn: false,
      username: "Adetunji",
    });
  }
}

export default new UserStore();
