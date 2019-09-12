import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

const AnimalForm = ({ errors, touched }) => {

  return (
    <Form>
      {touched.species && errors.species && <p className="error">{errors.species}</p>}
      <Field type="text" name="species" placeholder="Species" />

      {touched.age && errors.age && <p className="error">{errors.age}</p>}
      <Field type="number" name="age" placeholder="Age" />

      {touched.diet && errors.diet && <p className="error">{errors.diet}</p>}
      <Field component="select" name="diet">
        <option value="" disabled>Select Diet Class:</option>
        <option value="carnivore">Carnivore</option>
        <option value="herbavore">Herbavore</option>
        <option value="omnivore">Omnivore</option>
      </Field>

      {touched.vaccinations && errors.vaccinations && <p className="error">{errors.vaccinations}</p>}
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
  validationSchema: yup.object().shape({
    species: yup.string().required('You must define a species.'),
    age: yup.number().required().positive(),
    diet: yup.string().required(),
    vaccinations: yup.boolean().oneOf([true], 'You can only submit if animal has been vaccinated!')
  }),
  handleSubmit: (values) => {
    console.log(values)
  }
})(AnimalForm)
