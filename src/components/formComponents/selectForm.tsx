import React from 'react'
import { Field } from 'formik'
import PiSelect from '../select'
import { PiSelectProps } from '../select/select'

export default function PiSelectForm({
  onChange,
  options,
  ...formField
}: PiSelectProps) {
  return (
    <Field name={formField.name}>
      {({ field, form: { setFieldValue }, meta }: any) => {
        const handleValueChange: any = (e: any, actionMeta: any) => {
          setFieldValue(field.name, e)
          if (onChange) {
            onChange(e, actionMeta)
          }
        }
        return (
          <PiSelect
            {...field}
            name={field.name}
            label={formField.label}
            placeholder={formField.placeholder}
            options={options}
            onChange={handleValueChange}
            value={field.value}
            defaultValue={field.defaultValue}
            helpText={meta.touched && meta.error ? meta.error : ''}
            isMulti={formField.isMulti}
            isDisabled={formField.isDisabled}
            isSearchable={formField.isSearchable}
            isClearable={formField.isClearable}
            onInputChange={formField.onInputChange}
            onFocus={formField.onFocus}
            classNamePrefix={formField.classNamePrefix}
            isMandatory={formField.isMandatory}
            formatOptionLabel={formField.formatOptionLabel}
            noOptionsMessage={() => {
              return formField.noOptionsMessage || `No ${formField.label} Found`
            }}
          />
        )
      }}
    </Field>
  )
}
