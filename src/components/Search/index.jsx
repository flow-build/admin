import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Input from '../Input';

const Search = ({
  initialArray, setFilteredArray,
}) => {
  const [value, setValue] = useState('');
  let newFilteredArray = [];
  useEffect(() => {
    newFilteredArray = [];
    if (!value) {
      setFilteredArray(newFilteredArray);
      return;
    }
    initialArray.forEach((itemInArray) => {
      if (itemInArray.toLowerCase().trim().match(`${value.toLowerCase().trim()}`)) {
        newFilteredArray.push(itemInArray);
        setFilteredArray(newFilteredArray);
      }
    });
  }, [value]);
  return (
    <div>
      <Input elementType="input" icon="Search" placeholder="Filtre os workflows" value={value} onChange={setValue} />
    </div>
  );
};

Search.propTypes = {
  initialArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilteredArray: PropTypes.func.isRequired,
};


export default Search;
