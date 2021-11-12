import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormContext, Controller } from 'react-hook-form';
import SingleSelect from './SingleSelect';
import { IFormControlProps } from './types'

const FormControl: FC<IFormControlProps> = ({
  type,
  as,
  name,
  isRequired,
  isDisabled,
  selectOptions,
  isClearable,
  isSearchable,
  onChange,
}) => {
  const { register, control } = useFormContext();

  if (type === 'select')
    return (
      <>
        <Controller
          name={name}
          control={control}
          rules={{ required: isRequired }}
          render={props => {
            function handleChange(e: any) {
              props.field.onChange(e);
              if (onChange) onChange(e);
            }

            return (
              <SingleSelect
                options={selectOptions}
                isDisabled={isDisabled}
                isClearable={isClearable}
                isSearchable={isSearchable}
                props={props.field}
                onChange={handleChange}
              />
            );
          }}
        />
      </>
    );

  return (
    <Form.Control
      type={type}
      as={as}
      readOnly={isDisabled}
      {...register(name, {
        required: isRequired,
      })}
    />
  );
};

export default FormControl;
