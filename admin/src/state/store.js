import { createStore } from "redux";
// console.log('store is working')
import {productReducer} from "./feature/product/reducers"
const store = createStore(productReducer)
export default store