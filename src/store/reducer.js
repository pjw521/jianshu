import { combineReducers } from "redux-immutable"
import headerReducer from "../common/header/store/reducer.js"
import homeReducer from "../pages/home/store/reducer.js"
export default combineReducers({
    headerState:headerReducer,
    homeState:homeReducer
})