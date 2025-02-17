import React, { Fragment, useContext } from 'react'
import { default as AtlasTextfield, TextFieldProps } from '@atlaskit/textfield'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiInputProps2 } from './input2'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiInputClass } from './input.css'

/**
 *
 * @param props as  PiInputProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateInputTemplate({ libraryType, ...props }: PiInputProps2) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiInputProps
 * @returns Atlaskit TextField template
 */
function AtlasKitTemplate({ label, helpText, ...props }: PiInputProps2) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiInputClass(theme)}>
      {label && <PiTypography component="label">{label}</PiTypography>}
      <Fragment>
        <AtlasTextfield {...(props as TextFieldProps)} />
        {helpText && <PiTypography>{helpText}</PiTypography>}
      </Fragment>
    </div>
  )
}

/**
 *
 * @param props as  PiInputProps
 * @returns Default TextField template
 */
function DefaultTemplate(props: PiInputProps2) {
  const defaultProps = generateDefaultProps(props)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>{defaultProps.label}</label>
      <input {...defaultProps}></input>
      <span>{defaultProps.helperText}</span>
    </div>
  )
}

/**
 *
 * @param props as  PiInputProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiInputProps2) {
  const defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    value: props.value,
    defaultvalue: props.defaultValue,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  }

  return defaultProps
}
