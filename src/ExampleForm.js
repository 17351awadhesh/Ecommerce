import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-mui';
import { Checkbox, FormControlLabel, Button, Box } from '@mui/material';

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label={children}
    />
  );
};

const ExampleForm = () => {
  return (
    <Formik
      initialValues={{ checkbox: false, textField: '' }}
      validationSchema={Yup.object().shape({
        checkbox: Yup.boolean(),
        textField: Yup.string().test(
          'required-when-checkbox-is-true',
          'This field is required',
          (value, context) => {
            if (context.parent.checkbox === true && !value) {
              return false;
            }
            return true;
          }
        ),
      }
    )}
      
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <CustomCheckbox name="checkbox">
            Check to make the text field required
          </CustomCheckbox>
          <Box mb={2}>
            <Field
              component={TextField}
              name="textField"
              label="Text Field"
              fullWidth
              error={touched.textField && !!errors.textField}
              helperText={touched.textField && errors.textField}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ExampleForm;
