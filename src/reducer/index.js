import DarkMode from "./Mode.js"
import auth from "./UserView.js"
import {combineReducers} from "redux"

const Allreducer = combineReducers({
    DarkMode : DarkMode,
    auth : auth ,
    
})

export default Allreducer ;