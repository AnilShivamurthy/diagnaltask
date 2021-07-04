import { combineReducers } from "redux";
import {
    pageTitleReducer,
    pageOneReducer, 
    pageTwoReducer, 
    pageThreeReducer, 
    showReducer,
    searchReducer
} from './reducer';

const reducer = combineReducers({
    combinePageTitle: pageTitleReducer,
    combinePageOne: pageOneReducer,
    combinePageTwo: pageTwoReducer,
    combinePageThree: pageThreeReducer,   
    combineShow: showReducer,
    combineSearch: searchReducer,
});

export default reducer;