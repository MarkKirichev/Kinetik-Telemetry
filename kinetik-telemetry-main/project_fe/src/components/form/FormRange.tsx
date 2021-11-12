import React, { FC, useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { IFormRangeProps } from './types'
import Button from 'react-bootstrap/Button';

/*
 * Abstracted range slider component
 * It serves different layout based on props.
 */
const FormRange: FC<IFormRangeProps> = ({
  step,
  min,
  max,
  value,
  isDisabled,
  onChange,
  lapId,
  onResetRange,
}) => {
  const [values, setValues] = useState(value);

  // Reset value on lap change
  useEffect(() => {
    setValues(value)
  }, [lapId]);

  return (
    <div
      className={!isDisabled ? 'u-active' : ''}
      style={{ margin: "50px 5px 0 50px" }}
    >
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        disabled={isDisabled}
        onChange={(values) => {
          setValues(values)
          onChange!(values)
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                ...props.style,
                height: '4px',
                width: '100%',
                opacity: isDisabled ? '.5' : '1',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#ccc', '#ccc'],
                  // Use in case of range
                  // colors: ['#ccc', '#276EF1', '#ccc'],
                  min,
                  max,
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className="c-range__thumb"
            {...props}
            style={{
              ...props.style,
              height: '18px',
              width: '18px',
              borderRadius: '50%',
              backgroundColor: '#548BF4'
            }}
          />
        )}
      />
      {
        !isDisabled &&
          <>
            <div className="mt-5">
              <strong>Selected lap fragment: {values[0]}</strong>
              {/*Use in case of range*/}
              {/*<strong>Selected lap fragments:*/}
              {/*  {*/}
              {/*    values[0] === values[1]*/}
              {/*      ? ` ${values[0]}`*/}
              {/*      :` ${values[0]} - ${values[1]}`*/}
              {/*  }*/}
              {/*</strong>*/}
            </div>
            {/*Use in case of range*/}
            {/*<Button*/}
            {/*  type="button"*/}
            {/*  size="sm"*/}
            {/*  variant="outline-primary"*/}
            {/*  className="m-2"*/}
            {/*  onClick={() => {*/}
            {/*      onResetRange!();*/}
            {/*      setValues(value);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Reset range*/}
            {/*</Button>*/}
          </>
      }
    </div>
  );
};


export default FormRange;
