import React, { useState } from 'react';
import Search from '../../src/components/Search';

export default {
    component: Search,
    title: 'Search'
};

export const Default = () => {
  const initialArray = ['item1', 'item2', 'item3', 'item4'];
  const [filteredArray, setFilteredAraray] = useState([]);
  return (
    <>
      <Search initialArray={initialArray} setFilteredArray={setFilteredAraray} filteredArray={filteredArray} />
      <div style={{margin: '1rem'}}>
        {filteredArray.length > 0 && filteredArray.map(item => (
          <div style={{margim: '1rem'}} key={item}>
            <p>{item} </p>
          </div>
        ))}
      </div>
    </>
  );
};