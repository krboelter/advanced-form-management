import React from 'react'
import { withFormik, Form, Field } from 'formik';

const AnimalForm = (props) => {
  console.log(props)

  return (
    <Form>
      <Field type="text" name="species" placeholder="Species" />
      <Field type="text" name="age" placeholder="Age" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      species: values.species || '', //always pass through something, even an empty string
      age: values.age || ''
    }
  },
  handleSubmit: (values) => {
    console.log(values)
  }
})(AnimalForm)
