import React, { useState } from 'react';

import DateRange from '../../src/components/DateRange'

export default {
    component: DateRange,
    title: 'DateRange'
};


export const Default = () => {
  const [initialDateArray, setInitialDateArray] = useState([new Date('3/12/2020'), new Date('7/27/2020')]);
  const [updatedDateArray, setUpdatedDateArray] = useState([]);
  let displayArray = [];
  updatedDateArray.length > 0 ? displayArray = [...updatedDateArray] : displayArray = [...initialDateArray];
  return (
    <>
      <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray}/>
      {displayArray.map(date => (
        <div style={{marginLeft: '15px'}}>
          <p>{date.toLocaleDateString()} </p>
        </div>
      ))}
    </>
  );
};
