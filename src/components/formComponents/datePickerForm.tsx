import React from 'react'
import { Field } from 'formik'
import PiDatePicker from '../datepicker'
import { PiDatePickerProps } from '../datepicker/datePicker'
import moment from 'moment'

export default function PiDatepickerForm(formField: PiDatePickerProps) {
  return (
    <Field name={formField.name}>
      {({ field, form: { setFieldValue }, meta }: any) => {
        const handleValueChange = (e: any) => {
          console.log(
            moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD'))
          )
          const dateValid = moment(e).isBefore(
            moment(new Date()).format('YYYY-MM-DD')
          )
          if (dateValid === true) {
            return
          }
          setFieldValue(field.name, e)
          // formField.onChange(e)
          if (formField.onChange) {
            formField.onChange(e)
          }
        }
        return (
          <PiDatePicker
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
            isDisabled={formField.isDisabled}
            onKeyPress={(e: any) => {
              var key = e.charCode ? e.charCode : e.keyCode
              console.log(key)
              e.target.value = ''
              // if ((key === 46 || key === 101) && formField.type === 'number') {
              //  e.preventDefault()
              //  return false
              // } else if (formField.type === 'string') {
              //  var t = e.target.value
              //  e.target.value =
              //    t.indexOf('.') >= 0
              //      ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 2)
              //      : t
              //  return true
              // } else {
              //  return true
              // }
            }}
          />
        )
      }}
    </Field>
  )
}
