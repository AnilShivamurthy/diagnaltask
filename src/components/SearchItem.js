import React from 'react';
import { useSelector } from 'react-redux';

const SearchItem = () => {
    const searchItem = useSelector(state => state.combineSearch.searchItem);

    return (
        <div className="grid grid-cols-3 gap-x-3.5 gap-y-11 mx-3.5 pt-4">
            {
                (searchItem !== undefined) ? searchItem && searchItem.map((item, index) =>{
                        return (
                            <div key={index}>
                                <img src={(item['poster-image'] === "posterthatismissing.jpg") ? "placeholder_for_missing_posters.png" : item['poster-image']} alt={item.name} />
                                <div className="font-titillium text-white text-sm font-extralight pt-3">{item.name}</div>
                            </div>
                        )
                    }) : null
            }
        </div>
    );
};

export default SearchItem;