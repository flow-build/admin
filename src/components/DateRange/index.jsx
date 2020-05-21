import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import MyDatePicker from '../MyDatepicker';

const DateRange = ({
  initialDateArray, setUpdatedDateArray,
}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  let newDateArray = [];
  useEffect(() => {
    newDateArray = [];
    if (!startDate && !endDate) {
      setUpdatedDateArray(newDateArray);
      return;
    }
    initialDateArray.forEach((dateInArray) => {
      if (dateInArray >= startDate && dateInArray <= endDate) {
        newDateArray.push(dateInArray);
        setUpdatedDateArray(newDateArray);
      }
    });
  }, [startDate, endDate]);
  return (
    <div className="date-range">
      <div className="date-range-label">
        <p>Data Inicial:</p>
        <MyDatePicker selected={startDate} onChange={setStartDate} />
      </div>
      <div className="date-range-label">
        <p>Data Final:</p>
        <MyDatePicker selected={endDate} onChange={setEndDate} />
      </div>
    </div>
  );
};


DateRange.propTypes = {
  initialDateArray: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  setUpdatedDateArray: PropTypes.func.isRequired,
};

export default DateRange;
