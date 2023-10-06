import { combineReducers } from "redux";
import amountReducers from "../reducers/amountReducer";


const reducers = combineReducers({
    amount: amountReducers,
})

export default reducers;