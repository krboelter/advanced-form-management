import React from 'react'
import { withFormik, Form, Field } from 'formik';

const AnimalForm = (props) => {
  
  return (
    <Form>
      <Field type="text" name="species" placeholder="Species" />
      <Field type="number" name="age" placeholder="Age" />

      <Field component="select" name="diet">
        <option value="" disabled>Select Diet Class:</option>
        <option value="carnivore">Carnivore</option>
        <option value="herbavore">Herbavore</option>
        <option value="omnivore">Omnivore</option>
      </Field>

      <label>
        <Field type="checkbox" name="vaccinations" />
        <span>Vaccinations</span>
      </label>

      <Field component="textarea" name="notes" placeholder="Notes" />

      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  // these are the values but how formik handles them
  mapPropsToValues: (values) => {
    return {
      // this makes the inputs (value) "controlled", they line up with the "name" attributes on our Fields
      species: values.species || '', //always pass through something, even an empty string
      age: values.age || '',
      diet: values.diet || '',
      vaccinations: values.vaccinations || false,
      notes: values.notes || ''
    }
  },
  handleSubmit: (values) => {
    console.log(values)
  }
})(AnimalForm)
