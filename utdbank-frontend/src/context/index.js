import React from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";

const Context = React.createContext();

Context.displayName = "Context";

export const useContext = () => React.useContext(Context);

export const ContextProvider = ({ children }) => {

  const [userState, dispatchUser] = React.useReducer(
    userReducer,
    userInitialState
  );

  return (
    <Context.Provider value={{ userState, dispatchUser }}>
      {children}
    </Context.Provider>
  );

};
