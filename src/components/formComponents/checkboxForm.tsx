import React from 'react'
import { Field } from 'formik'
import PiCheckbox from '../checkbox'
import { PiCheckboxProps } from '../checkbox/checkbox'

export default function PiCheckboxForm(formField: PiCheckboxProps) {
  return (
      <Field name={formField.name}>
        {({ field, form: { setFieldValue }, meta }: any) => {
          const handleValueChange = (e: any) => {
            setFieldValue(field.name, e.target.checked)
          }
          return (
            <PiCheckbox
              {...field}
              label={formField.label}
              libraryType='atalskit'
              isChecked={field.value}
              onChange={handleValueChange}
              helpText={meta.touched && meta.error ? meta.error : ''}
            />
          )
        }}
      </Field>
  )
}
