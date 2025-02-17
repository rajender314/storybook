import React, { Fragment, useContext } from 'react'
import {
  DateTimePicker as AtlasDateTimePicker,
  DateTimePickerProps
} from '@atlaskit/datetime-picker'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiDateTimePickerProps } from './dateTimePicker'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiDateTimePickerClass } from './dateTimePicker.css'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

/**
 *
 * @param props as  PiDateTimePickerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateDateTimePickerTemplate(props: PiDateTimePickerProps) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiDateTimePickerProps
 * @returns Atlaskit Date and time picker template
 */
function AtlasKitTemplate({
  label,
  name,
  libraryType,
  helpText,
  ...props
}: PiDateTimePickerProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={`${PiDateTimePickerClass(theme)} pi-date-time-picker`}>
      <p className='date-time-picker-label'>
        {label && (
          <div className='field-label-div'>
            <PiTypography component='label'>{label}</PiTypography>
            {props.isMandatory && <span className='mandatory-star'>*</span>}
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
      </p>
      <Fragment>
        <AtlasDateTimePicker {...(props as DateTimePickerProps)} />
        {helpText && <PiTypography>{helpText}</PiTypography>}
      </Fragment>
    </div>
  )
}

/**
 *
 * @param props as  PiDateTimePickerProps
 * @returns Deafult Date and time picker template
 */
function DefaultTemplate(props: PiDateTimePickerProps) {
  const defaultProps = generateDeafultProps(props)
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>{props.label}</label>
        <input type='datetime-local' {...defaultProps} />
        {props.helpText && <span>{props.helpText}</span>}
      </div>
    </Fragment>
  )
}

/**
 *
 * @param props as  PiDateTimePickerProps
 * @returns props suitable for default template after conversion
 */
function generateDeafultProps(props: PiDateTimePickerProps) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: `${props.dateFormat}+${props.timeFormat}`
  }
  return defaultProps
}
