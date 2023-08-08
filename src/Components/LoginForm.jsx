import React from "react";
import SubmitButton from "./SubmitButton";
import UserStore from "../store/userStore";

const LoginForm = () => {
  return (
    <div className="loginForm h-[80vh] flex items-center justify-center">
      <div className="w-[30%] p-5 rounded-xl flex flex-col items-center gap-5">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-1 border-[1px] bg-transparent border-purpple"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full px-3 py-1 border-[1px] bg-transparent border-purpple"
        />

        <SubmitButton
          logInOut="Login"
          onClick={() => this.componentDidMount()}
          style={`bg-purpple px-5 py-1 w-1/4`}
        />
      </div>
    </div>
  );
};

export default LoginForm;
