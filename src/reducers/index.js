import {combineReducers} from 'redux'
import markers from "./markers";
import checkinDialog from "./checkinDialog";
import cardDialog from "./cardDialog";


const reducer = combineReducers({
    markers,
    checkinDialog,
    cardDialog
});


export default reducer;
