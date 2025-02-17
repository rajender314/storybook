import React from 'react'
import { Field } from 'formik'
import PiDateTimePicker from '../dateTimePicker'
import { PiDateTimePickerProps } from '../dateTimePicker/dateTimePicker'

export default function PiDatepickerForm(formField: PiDateTimePickerProps) {
  return (
    <Field name={formField.name}>
      {({ field, form: { setFieldValue }, meta }: any) => {
        const handleValueChange = (e: any) => {
          setFieldValue(field.name, e)
          // formField.onChange(e)
          if (formField.onChange) {
            formField.onChange(e)
          }
        }
        return (
          <PiDateTimePicker
            {...field}
            label={formField.label}
            placeholder={formField.placeholder}
            minDate={formField.minDate}
            maxDate={formField.maxDate}
            onChange={handleValueChange}
            value={field.value}
            defaultValue={field.defaultValue}
            helpText={meta.touched && meta.error ? meta.error : ''}
            isMandatory={formField.isMandatory}
            times={formField.times}
            datePickerProps={formField.datePickerProps}
            timePickerProps={formField.timePickerProps}
            isDisabled={formField.isDisabled}
          />
        )
      }}
    </Field>
  )
}
