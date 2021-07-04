import { actionType } from "./constant";

export const setPageOneTitle=(title)=>{
    return{
        type: actionType.SET_PAGE_ONE_TITLE,
        payload: title
    }
}

export const setPageTwoTitle=(title)=>{
    return{
        type: actionType.SET_PAGE_TWO_TITLE,
        payload: title
    }
}

export const setPageThreeTitle=(title)=>{
    return{
        type: actionType.SET_PAGE_THREE_TITLE,
        payload: title
    }
}

export const setPageOne=(data)=>{
    return{
        type: actionType.SET_PAGE_ONE,
        payload: data
    }
}

export const setPageTwo=(data)=>{
    return{
        type: actionType.SET_PAGE_TWO,
        payload: data
    }
}

export const setPageThree=(data)=>{
    return{
        type: actionType.SET_PAGE_THREE,
        payload: data
    }
}

export const setShow=(show)=>{
    return{
        type: actionType.SET_SHOW,
        payload: show
    }
}

export const setSearch=(search)=>{
    return{
        type: actionType.SET_SEARCH,
        payload: search
    }
}