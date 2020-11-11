import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import MyDatePicker from '../MyDatepicker';

const DateRange = ({
  initialDateArray, setUpdatedDateArray, updatedDateArray,
}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  useEffect(() => {
    if (updatedDateArray.length === 0) {
      setUpdatedDateArray(initialDateArray);
      return;
    }
    setUpdatedDateArray(initialDateArray.filter((dateInArray) => dateInArray >= startDate && dateInArray <= endDate));
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
  updatedDateArray: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  setUpdatedDateArray: PropTypes.func.isRequired,
};

export default DateRange;
