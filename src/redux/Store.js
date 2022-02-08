import { createStore } from "redux";
import rootReducers from "./reducer";


export const Store = createStore(rootReducers);