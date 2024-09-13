import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const initialValues = {
    checkbox: false,
    textField: '',
  };

 

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      const validationSchema = {
        Yup.object().shape({
            checkbox: Yup.boolean(),
            textField: Yup.string().when('checkbox', {
              is: true,
              then: Yup.string().required('This field is required'),
            }),
          })
      }
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="checkbox" name="checkbox" />
          <label>Check to require text field</label>
          <br />
          <Field type="text" name="textField" />
          <ErrorMessage name="textField" component="div" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submithhhh
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
