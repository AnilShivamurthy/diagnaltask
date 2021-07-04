import React, { useEffect, Suspense } from 'react';
import ListingPageOne from './components/ListingPageOne';
import { useDispatch, useSelector } from 'react-redux';
import { setPageOne, setPageOneTitle, setPageThree, setPageThreeTitle, setPageTwo, setPageTwoTitle, setSearch } from './redux/action';
import Search from './components/Search';
import SearchItem from './components/SearchItem';


const ListingPageTwo = React.lazy(
  () => new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/ListingPageTwo")), 1000)
    )
);

const ListingPageThree = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/ListingPageThree")), 5000)
    )
);

function App() {
  const title = useSelector(state => state.combinePageThreeTitle.pageThreeTitle);
  const pageOne = useSelector(state => state.combinePageOne.pageOne);
  const pageTwo = useSelector(state => state.combinePageTwo.pageTwo);
  const pageThree = useSelector(state => state.combinePageThree.pageThree);
  const searchItem = useSelector(state => state.combineSearch.searchItem);
  const dispatch = useDispatch();

  const getPageDate = async ()=>{
    await fetch('./CONTENTLISTINGPAGE-PAGE1.json').then(response => {
      return response.json();
    }).then(pageOneData => {
      dispatch(setPageOne([pageOneData.page]));
      dispatch(setPageOneTitle(pageOneData.page.title));
    });

    await fetch('./CONTENTLISTINGPAGE-PAGE2.json').then(response => {
      return response.json();
    }).then(pageTwoData => {
      dispatch(setPageTwo([pageTwoData.page]));
      dispatch(setPageTwoTitle(pageTwoData.page.title));
    });

    await fetch('./CONTENTLISTINGPAGE-PAGE3.json').then(response => {
      return response.json();
    }).then(pageThreeData => {
      dispatch(setPageThree([pageThreeData.page]));
      dispatch(setPageThreeTitle(pageThreeData.page.title));
    });
  }

  useEffect(()=>{
    getPageDate();
  },[])

  const handleClickSearch = (searchValue)=>{
    let EmptyArray = [];
  
    pageOne && pageOne.filter((itemOne, index)=>{
      itemOne['content-items'].content.filter((contentItem) => {
        if(contentItem.name.toLowerCase() === searchValue.toLowerCase()){
            dispatch(setSearch(searchItem.concat(contentItem)));
            return EmptyArray.push(contentItem);
        }
      })
    });

    pageTwo &&  pageTwo.filter((itemTwo, index)=>{
      itemTwo['content-items'].content.filter((contentItem) => {
        if(contentItem.name.toLowerCase() === searchValue.toLowerCase()){
            dispatch(setSearch(searchItem.concat(contentItem)));
            return EmptyArray.push(contentItem);
        }
      })
    });

    pageThree && pageThree.filter((itemThree, index)=>{
      itemThree['content-items'].content.filter((contentItem) => {
        if(contentItem.name.toLowerCase() === searchValue.toLowerCase()){
            return EmptyArray.push(contentItem);
        }
      })
    });

    dispatch(setSearch(searchItem.concat(EmptyArray)));

  }


  return (
    <div className="bg-black">
      <div className="flex justify-between pt-4 px-4">
        <div className="font-titillium text-white text-base light">{title}</div>
       <Search handleClickSearch={handleClickSearch}/>
      </div>
      {
        (searchItem.length !== 0) ? <SearchItem/> :  <>
                                                    <ListingPageOne/>
                                                    <Suspense fallback={<div>Loading</div>}>
                                                      <ListingPageTwo/>
                                                      <ListingPageThree/>
                                                    </Suspense>
                                                  </>
        }
     
    </div>
  );
}
export default App;
