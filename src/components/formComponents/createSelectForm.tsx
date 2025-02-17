import React from 'react'
import { Field } from 'formik'
import PiCreateSelect from '../creatable-select'
import { PiCreateSelectProps } from '../creatable-select/create-select'

export default function PiCreateSelectForm({
  onChange,
  options,
  ...formField
}: PiCreateSelectProps) {
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
          <PiCreateSelect
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
            formatCreateLabel={formField.formatCreateLabel}
            isValidNewOption={formField.isValidNewOption}
          />
        )
      }}
    </Field>
  )
}
