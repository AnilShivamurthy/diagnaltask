import React from 'react';
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from '../redux/action';

const Search = ({handleClickSearch}) => {
    const show = useSelector(state => state.combineShow.show);
    const dispatch = useDispatch();

    const handleSearch =()=>{
        dispatch(setShow(!show));
    }

    const handleChange =(e) =>{
        handleClickSearch(e.target.value)
    }

    return (
        <>
             <GoSearch className="text-white mt-1.5 absolute right-5" onClick={handleSearch}/> 
             {(show) ? <input type="text" className="font-titillium text-white text-xs light border border-solid border-white bg-black rounded text-white pl-1" onChange={(e)=>handleChange(e)}/> : null}
             
        </>
    );
};

export default Search;