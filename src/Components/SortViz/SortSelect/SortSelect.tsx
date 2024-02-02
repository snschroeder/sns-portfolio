import React, { useState } from 'react';
import SortViz from '../SortViz';
import './SortSelect.css';

export default function Search() {
  const [sortType, setSortType] = useState('quick-sort');

  return (
    <div  className="viz-container">
      <form className="sort-form">
        <select className="search-select" onChange={(e) => setSortType(e.target.value)}>
          <option value="quick-sort">quick sort</option>
          <option value="bubble-sort">bubble sort</option>
          <option value="comb-sort">comb sort</option>
          <option value="selection-sort">selection sort</option>
          <option value="insertion-sort">insertion sort</option>
        </select>
      </form>
      <SortViz sortType={sortType} />
    </div>
  );
}
