import { createStore } from "redux";
import { reducer } from "../product-reducer/reducer";

export const Store = createStore(reducer,{});
