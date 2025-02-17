import React from 'react'
import { Field } from 'formik'
import PiInput2 from '../input'
import { PiInputProps2 } from '../piInput2/input2'

export default function PiInputForm2({ onChange, ...formField }: PiInputProps2) {
    const showSuccess = formField['showSuccess'] ? 'success' : ''
    const handleValueChange: any = (e: any) => {
        if (onChange) {
            onChange(e);
        }
    }
    return (
        <Field name={formField.name}>
            {({ field, form, meta }: any) => (
                <PiInput2
                    {...field}
                    onChange={e => {
                        handleValueChange(e)
                        form.setFieldValue(e.target.name, e.target.value)
                    }}
                    label={formField.label}
                    type={formField.type}
                    placeholder={formField.placeholder}
                    className={meta.touched && meta.error ? 'error' : showSuccess}
                    helpText={meta.touched && meta.error ? meta.error : ''}
                    isDisabled={formField.isDisabled}
                    defaultvalue={formField.defaultValue}
                    value={formField.value}
                />
            )
            }
        </Field>
    )
}
