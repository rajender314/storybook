import React, { Fragment, useContext } from 'react'
import {
  TimePicker as AtlasTimePicker,
  TimePickerProps
} from '@atlaskit/datetime-picker'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiTimePickerProps } from './timePicker'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiTimePickerClass } from './timePicker.css'

/**
 *
 * @param props as  PiTimePickerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateTimePickerTemplate({
  libraryType,
  ...props
}: PiTimePickerProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiTimePickerProps
 * @returns Atlaskit Button template
 */
function AtlasKitTemplate({
  label,
  name,
  helpText,
  ...props
}: PiTimePickerProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiTimePickerClass(theme)}>
      {label && <PiTypography>{label}</PiTypography>}
      <Fragment>
        <AtlasTimePicker {...(props as TimePickerProps)} />
        {helpText && <PiTypography>{helpText}</PiTypography>}
      </Fragment>
    </div>
  )
}

/**
 *
 * @param props as  PiTimePickerProps
 * @returns Atlaskit Button template
 */
function DefaultTemplate(props: PiTimePickerProps) {
  const defaultProps = generateDeafultProps(props)
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>{props.label}</label>
        <input type='time' {...defaultProps} />
        {props.helpText && <span>{props.helpText}</span>}
      </div>
    </Fragment>
  )
}

/**
 *
 * @param props as  PiTimePickerProps
 * @returns props suitable for default template after conversion
 */
function generateDeafultProps(props: PiTimePickerProps) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    format: `${props.timeFormat}`
  }
  return defaultProps
}
