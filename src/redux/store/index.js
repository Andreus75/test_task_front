import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers/reducers";

export let store = createStore(reducer);