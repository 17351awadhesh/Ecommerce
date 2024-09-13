import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


// const Schema = Yup.object().shape({
//   textField: Yup.string().when("checkboxNow", (checkboxNow, schema)=> {
//       if(checkboxNow){
//         return schema.required("Required")
//       } 
//     return schema;
//   })
// })

// const Schema = Yup.object().shape({
//   textField: Yup.string().when('checkboxNow', {
//     is: true,
//     then: Yup.string().required('Required'),
//     otherwise: Yup.string(),
//   }),
// });

const Schema = Yup.object().shape({
  textField: Yup.string().test(
    'required-when-checkbox-is-true',
    'Required',
    function (value) {
      const { checkboxNow } = this.parent;
      return !checkboxNow || !!value;
    }
  ),
});



const MyForm = () => {
  const initialValues = {
    textField: '',
    checkboxNow: false,
  };


  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      const validationSchema = {Schema}
      onSubmit={onSubmit}
    >
      {({ }) => (
        <Form>
          <Field type="checkbox" name="checkboxNow" />
          <label>Check to require text field</label>
          <br />
          <Field type="text" name="textField" />
          <ErrorMessage name="textField" component="div" />
          
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
