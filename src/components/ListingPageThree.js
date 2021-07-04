import React from 'react';
import { useSelector } from 'react-redux';

const ListingPageThree = () => {
    const pageThree = useSelector(state => state.combinePageThree.pageThree);
    
    return (
        <div className="grid grid-cols-3 gap-x-3.5 gap-y-11 mx-3.5 pt-4">
        {
           (pageThree !== undefined) ? pageThree && pageThree.map((pageThreeItems, index)=>{
                    return( pageThreeItems['content-items'].content.map((imageItem, imageIndex)=>{
                            return (
                                <div key={index}>
                                    <img src={(imageItem['poster-image'] === "posterthatismissing.jpg") ? "placeholder_for_missing_posters.png" : imageItem['poster-image'] } alt={imageItem.name} />
                                    <div className="font-titillium text-white text-sm font-extralight pt-3">{imageItem.name}</div>
                                </div>
                            )
                        })
                    )
            }) : null
        }
        </div>
    );
};

export default ListingPageThree;