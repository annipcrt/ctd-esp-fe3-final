import { createContext, useContext, useReducer } from "react";

export const initialState = {theme: "light", data: [], favs: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch(action.type) {
    case "dark":
      return {...state, theme: "dark"}
    case "light": 
      return 
    default:
      return state
  }
}

export const ContextProvider = ({ children }) => {
  
  const url = "https://jsonplaceholder.typicode.com/users"
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );

};

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}