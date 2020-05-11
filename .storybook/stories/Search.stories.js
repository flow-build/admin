import React, { useState } from 'react';
import Search from '../../src/components/Search';

export default {
    component: Search,
    title: 'Search'
};

export const Default = () => {
  const [initialArray, setInitialArray] = useState(['item1', 'item2', 'item3', 'item4']);
  const [filteredArray, setFilteredAraray] = useState([]);
  let displayArray = [];
  filteredArray.length > 0 ? displayArray = [...filteredArray] : displayArray = [...initialArray];
  return (
    <>
      <Search initialArray={initialArray} setFilteredArray={setFilteredAraray}/>
      <div style={{margin: '1rem'}}>
        {displayArray.map(item => (
          <div style={{margim: '1rem'}}>
            <p>{item} </p>
          </div>
        ))}
      </div>
    </>
  );
};