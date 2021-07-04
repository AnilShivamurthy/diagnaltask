import { actionType } from "../constant";

const initialState ={
    pageTitle: "",
    pageOne: [],
    pageTwo: [],
    pageThree: [],
    show: false,
    searchItem: [],
}

export const pageTitleReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PAGE_ONE_TITLE:
            return {...state, pageOneTitle: payload};
    
        default:
            return state;
    }
}

export const pageOneReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PAGE_ONE:
            return {...state, pageOne: payload};
    
        default:
            return state;
    }
}

export const pageTwoReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PAGE_TWO:
            return {...state, pageTwo: payload};
    
        default:
            return state;
    }
}

export const pageThreeReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_PAGE_TWO:
            return {...state, pageThree: payload};
    
        default:
            return state;
    }
}

export const showReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SHOW:
            return {...state, show: payload};
    
        default:
            return state;
    }
}

export const searchReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case actionType.SET_SEARCH:
            return {...state, searchItem: payload};
    
        default:
            return state;
    }
}