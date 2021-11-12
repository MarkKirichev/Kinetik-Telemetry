import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'components/form/FormControl';
import FormLabel from 'components/form/FormLabel';
import { IFormGroupProps } from './types'

/*
 * Abstracted form group component, which includes:
 * - label (optional)
 * - control/field (input, select, etc.)
 *
 * It serves different layout based on props.
 */
const FormGroup: FC<IFormGroupProps> = ({
  controlId,
  label,
  type,
  as,
  name,
  isRequired,
  isDisabled,
  isClearable,
  isSearchable,
  children,
  selectOptions,
  onChange,
}) => {
  const renderControl = () => {
    return (
      <FormControl
        type={type}
        as={as}
        name={name}
        isRequired={isRequired}
        isDisabled={isDisabled}
        selectOptions={selectOptions}
        isClearable={isClearable}
        isSearchable={isSearchable}
        onChange={onChange}
      />
    );
  };

  return (
    <Form.Group
      as={Row}
      controlId={controlId}
      className="mb-3"
    >
      <Col>
        {label && <FormLabel label={label} />}
        {renderControl()}
      </Col>
      {children}
    </Form.Group>
  );
};

export default FormGroup;
