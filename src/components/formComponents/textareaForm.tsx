import React from 'react'
import { Field } from 'formik'
import PiTextArea from '../textArea'
import { PiTextAreaProps } from '../textArea/textArea'

export default function PiTextareaForm({
  onChange,
  ...formField
}: PiTextAreaProps) {
  const handleValueChange: any = (e: any) => {
    if (onChange) {
      onChange(e)
    }
  }
  return (
    <Field name={formField.name}>
      {({ field, form, meta }: any) => (
        <PiTextArea
          {...field}
          onChange={(e) => {
            handleValueChange(e)
            form.setFieldValue(e.target.name, formField.convertToCapital ? e.target.value.toUpperCase() : e.target.value)
          }}
          value={field.value}
          defaultValue={field.defaultValue}
          label={formField.label}
          placeholder={formField.placeholder}
          helpText={meta.touched && meta.error ? meta.error : ''}
          isDisabled={formField.isDisabled}
          maxLength={formField.maxLength}
          isMandatory={formField.isMandatory}
        />
      )}
    </Field>
  )
}
