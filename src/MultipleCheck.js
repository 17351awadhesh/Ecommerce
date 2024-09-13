import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MultipleCheck = () => {
  const initialValues = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    textField: '',
  };

  const validationSchema = Yup.object().shape({
    textField: Yup.string().test(
      'required-if-any-checkbox-selected',
      'Required if any checkbox is selected',
      function (value) {
        const { checkbox1, checkbox2, checkbox3 } = this.parent;
        const anyCheckboxSelected = checkbox1 || checkbox2 || checkbox3;
        return !anyCheckboxSelected || !!value;
      }
    ),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="checkbox" name="checkbox1" />
          <label>Checkbox 1</label>
          <br />
          <Field type="checkbox" name="checkbox2" />
          <label>Checkbox 2</label>
          <br />
          <Field type="checkbox" name="checkbox3" />
          <label>Checkbox 3</label>
          <br />
          <Field type="text" name="textField" />
          <ErrorMessage name="textField" component="div" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MultipleCheck;
