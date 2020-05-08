import React, { useState } from 'react';

import MyDatePicker from '../../src/components/MyDatepicker'

export default {
    component: MyDatePicker,
    title: 'MyDatePicker'
};


export const Default = () => {
  const [date, setDate] = useState(new Date());
  return (
    <MyDatePicker selected={date} onChange={setDate}/>
  );
};
