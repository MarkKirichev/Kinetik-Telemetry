import React, { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IFormProps } from './types'

/*
 * This is our custom form component, which is built on `react-bootstrap` Form and
 * wrapped with `FormProvider` from `react-hook-form`.
 */
const FormComponent: FC<IFormProps> = ({
  children,
  methods,
  onSubmit,
  btnLabel,
  className = '',
}) => {
  const { formState } = methods;
  const { isSubmitting } = formState;
  return (
    <FormProvider {...methods}>
      <Form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        onChange={() => methods.clearErrors('errors_common')}
        className={className}
      >

        {/* Form elements */}
        {children}

        {/* Form buttons - submit button with/without cancel option */}
        {/*<Button*/}
        {/*  disabled={isSubmitting}*/}
        {/*  loading={isSubmitting}*/}
        {/*  type="submit"*/}
        {/*>*/}
        {/*  {btnLabel}*/}
        {/*</Button>*/}
      </Form>
    </FormProvider>
  );
};

export default FormComponent;
