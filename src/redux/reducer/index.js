import { combineReducers } from "redux";
import {
    pageOneTitleReducer,
    pageTwoTitleReducer,
    pageThreeTitleReducer, 
    pageOneReducer, 
    pageTwoReducer, 
    pageThreeReducer, 
    showReducer,
    searchReducer
} from './reducer';

const reducer = combineReducers({
    combinePageOneTitle: pageOneTitleReducer,
    combinePageTwoTitle: pageTwoTitleReducer,
    combinePageThreeTitle: pageThreeTitleReducer,
    combinePageOne: pageOneReducer,
    combinePageTwo: pageTwoReducer,
    combinePageThree: pageThreeReducer,   
    combineShow: showReducer,
    combineSearch: searchReducer,
});

export default reducer;