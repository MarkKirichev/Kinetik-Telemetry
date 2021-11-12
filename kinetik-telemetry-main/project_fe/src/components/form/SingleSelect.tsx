import React, { FC } from 'react';
import Select from 'react-select';
import { SelectComponentsProps } from 'react-select/src/Select';
import { ISelectProps } from './types'

/*
 * Abstracted select component through `react-select`.
 * Used when single select.
 */
const SingleSelect: FC<ISelectProps> = ({
  isClearable,
  isDisabled,
  isSearchable,
  options,
  value,
  onChange,
  className = '',
  props,
}) => {

  const componentProps: SelectComponentsProps = {
    ...props,
    value: value || props?.value,
    onChange: onChange || props?.onChange,
    className: `c-custom-select ${className}`,
    classNamePrefix: 'cs',
    isDisabled,
    isClearable,
    isSearchable,
    options,
  };

  return <Select {...componentProps} />;
};

export default SingleSelect;
