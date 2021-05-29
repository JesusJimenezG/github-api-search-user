import { combineReducers } from "redux"
import ReposReducer from "./ReposReducer"
import UserListReducer from "./UserListReducer"
import UserReducer from "./UserReducer"

const RootReducer = combineReducers({
    UserList: UserListReducer,
    User: UserReducer,
    Repos: ReposReducer,
})

export default RootReducer
