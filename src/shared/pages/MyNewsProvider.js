import React, { useEffect, useReducer, useRef } from "react";
import { myNewsReducer } from "../reducers/MyNewsReducer.js";

export const MyNewsListContext = React.createContext();
export const MyNewsListDispatchContext = React.createContext();
export const NewsViewTypeContext = React.createContext();
export const CardViewContext = React.createContext();

const MyNewsProvider = props => {
  const [newsList, dispatch] = useReducer(myNewsReducer, []);

  useEffect(() => {
    (async () => {
      fetch("http://localhost:3000/newslist")
        .then(res => res.json())
        .then(newsJson => {
          dispatch({ type: "INIT_MY_NEWSLIST", payload: newsJson });
        });
    })();
  }, []);

  return (
    <MyNewsListDispatchContext.Provider value={dispatch}>
      <MyNewsListContext.Provider value={{ newsList }}>
        {props.children}
      </MyNewsListContext.Provider>
    </MyNewsListDispatchContext.Provider>
  );
};

export default MyNewsProvider;
