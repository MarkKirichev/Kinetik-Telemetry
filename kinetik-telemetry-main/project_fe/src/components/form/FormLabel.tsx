import React, {FC} from 'react';
import Form from 'react-bootstrap/Form';
import { IFormLabelProps } from './types'

/*
 * Abstracted label component, displaying form control labels.
 * It serves different layout based on props.
 */
const FormLabel: FC<IFormLabelProps> = ({ label }) => {
  return (
    <Form.Label>{label}</Form.Label>
  );
};


export default FormLabel;
