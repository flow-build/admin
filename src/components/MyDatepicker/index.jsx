import React from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import pt from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

const MyDatePicker = ({
  selected, onChange,
}) => {
  registerLocale('pt', pt);
  setDefaultLocale('pt');
  return (
    <div className="datepicker-cockpit ">
      <DatePicker
        selected={selected}
        onChange={onChange}
        className="input-content"
        locale="pt"
        dateFormat="P"
      />
    </div>
  );
};

MyDatePicker.propTypes = {
  selected: PropTypes.PropTypes.instanceOf(Date), //eslint-disable-line
  onChange: PropTypes.func.isRequired,
};

export default MyDatePicker;
