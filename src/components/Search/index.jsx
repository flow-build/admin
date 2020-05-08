import React, { useState } from 'react';

import Input from '../Input';

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input elementType="input" icon="Search" placeholder="Filtre os workflows" value={value} onChange={setValue} />
    </div>
  );
};

export default Search;
