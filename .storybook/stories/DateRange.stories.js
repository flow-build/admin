import React, { useState } from 'react';

import DateRange from '../../src/components/DateRange'

export default {
    component: DateRange,
    title: 'DateRange'
};


export const Default = () => {
  const initialDateArray = [new Date('3/12/2020'), new Date('7/27/2020')];
  const [updatedDateArray, setUpdatedDateArray] = useState([]);
  return (
    <>
      <DateRange initialDateArray={initialDateArray} setUpdatedDateArray={setUpdatedDateArray} updatedDateArray={updatedDateArray}/>
      {updatedDateArray.length > 0 && updatedDateArray.map((date, index) => (
        <div style={{marginLeft: '15px'}} key={index}>
          <p>{date.toLocaleDateString()} </p>
        </div>
      ))}
    </>
  );
};
