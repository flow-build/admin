import React, { useEffect, useState, memo } from 'react'
import CustomSelect from 'react-select'

import PropTypes from 'prop-types'

import * as S from './styles'

const Select = ({
  options,
  defaultValue,
  label,
  onChange,
  placeholder,
  isSearchable = false,
  isClearable,
}) => {
  const [customOptions, setCustomOptions] = useState([])

  useEffect(() => {
    if (options && options.length) {
      setCustomOptions(
        options.map((option) => {
          if (option?.value && option?.label) {
            return {
              value: option.value,
              label: option.label,
            }
          }

          return {
            value: option,
            label: option,
          }
        })
      )
    } else {
      setCustomOptions([])
    }
  }, [options])

  return (
    <S.Container>
      <S.Label>{label || ''}</S.Label>

      <CustomSelect
        options={customOptions}
        placeholder={placeholder || 'Select an option'}
        value={customOptions.find((option) => option.value === defaultValue)}
        isDisabled={!customOptions.length}
        isClearable={isClearable}
        isSearchable={isSearchable}
        onChange={(e) => onChange((e && e.value) || '')}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </S.Container>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
}

export default memo(Select)
