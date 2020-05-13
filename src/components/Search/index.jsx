import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Input from '../Input';

const Search = ({
  initialArray, filteredArray, setFilteredArray,
}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (filteredArray.length === 0) setFilteredArray(initialArray);
  }, [value]);
  const filterSearch = (valueInput) => {
    const trimLower = (str) => str.trim().toLowerCase();
    setFilteredArray(initialArray.filter((item) => trimLower(item).match(new RegExp(trimLower(valueInput), 'g'))));
    setValue(valueInput);
  };
  return (
    <div>
      <Input elementType="input" icon="Search" placeholder="Filtre os workflows" value={value} onChange={filterSearch} />
    </div>
  );
};

Search.propTypes = {
  initialArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilteredArray: PropTypes.func.isRequired,
};


export default Search;
