import React, { useState } from 'react';
import Search from '../../src/components/Search';

export default {
    component: Search,
    title: 'Search'
};

export const Default = () => {
  const testArray = ['item1', 'item2', 'item3', 'item4']
  return (
    <>
      <Search />
      <div style={{margin: '1rem'}}>
        {testArray.map(test => (
          <p style={{margin: '1rem'}}>{test}</p>
        ))}
      </div>
    </>
  );
};