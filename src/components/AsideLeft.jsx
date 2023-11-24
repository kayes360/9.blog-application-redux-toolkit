import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortSelected } from "../features/sort/sortSlice";
import { filterSelected } from "../features/filter/filterSlice";

export default function AsideLeft() {
  const dispatch = useDispatch(); 
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    dispatch(sortSelected(selectedSort));
  };

  const filterKey = useSelector((state) => state.filter.filterKey);


  const handleFilter = (selectedFilter) => { 
    dispatch(filterSelected(selectedFilter))
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={(e) => handleSortChange(e)}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>

        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="all" 
                className="radio"
                checked={filterKey === 'all'}
                value="all"
                onChange={(e) => handleFilter(e.target.value)}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="saved"
                className="radio"
                value="saved"
                onChange={(e) => handleFilter(e.target.value)}
              />
              <label htmlFor="saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
