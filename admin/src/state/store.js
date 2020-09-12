import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
export default createStore(
    applyMiddleware(thunkMiddleware, promiseMiddleware(), 
    )
);
