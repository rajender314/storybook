import React, { Fragment, useContext } from 'react'
import {
  DatePicker as AtlasDatePicker,
  DatePickerProps
} from '@atlaskit/datetime-picker'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiDatePickerProps } from './datePicker'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiDatePickerClass } from './datePicker.css'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

/**
 *
 * @param props as  PiButtonProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateDatePickerTemplate(props: PiDatePickerProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiDatePickerProps
 * @returns Atlaskit Button template
 */
function AtlasKitTemplate({
  label,
  libraryType,
  isMandatory,
  helpText,
  ...props
}: PiDatePickerProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiDatePickerClass(theme)}>
      <div className='picker-label'>
        {label && (
          <div className='field-label-div'>
            <PiTypography component='label'>{label}</PiTypography>
            {isMandatory && <span className='mandatory-star'>*</span>}
          </div>
        )}
        {props.isIcons && (
          <div className='save-reset-icons'>
            <div className='tick-icon' title='Save Changes'>
              <PiTickIcon
                onClick={(e: any) => {
                  props.emitSave ? props.emitSave(e) : null
                }}
              />
            </div>

            <div className='undo-icon' title='Undo Changes'>
              <PiUndoIcon
                onClick={(e: any) => {
                  props.emitUndo ? props.emitUndo(e) : null
                }}
              />
            </div>
          </div>
        )}
      </div>
      <Fragment>
        <AtlasDatePicker {...(props as DatePickerProps)} name='dob' />
        {helpText && <PiTypography>{helpText}</PiTypography>}
      </Fragment>
    </div>
  )
}

/**
 *
 * @param props as  PiDatePickerProps
 * @returns Atlaskit Button template
 */
function DefaultTemplate(props: PiDatePickerProps) {
  const defaultProps = generateDefaultProps(props)
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>{props.label}</label>
        <input type='date' {...defaultProps} />
        {props.helpText && <span>{props.helpText}</span>}
      </div>
    </Fragment>
  )
}

/**
 *
 * @param props as  PiDatePickerProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiDatePickerProps) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: `${props.dateFormat}`
  }
  return defaultProps
}
