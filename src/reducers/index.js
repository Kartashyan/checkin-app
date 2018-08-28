import {combineReducers} from 'redux'
import markers from "./markers";
import checkinDialog from "./checkinDialog";


const reducer = combineReducers({
    markers,
    checkinDialog
});


export default reducer;
