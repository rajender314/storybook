import React, { Fragment, useContext } from 'react'
import { CreatableSelect } from '@atlaskit/select'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { DropDownItemProps, PiCreateSelectProps } from './create-select'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiCreateSelectClass } from './create-select.css'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

/**
 *
 * @param props as  PiCreateSelectProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateSelectTemplate({
  libraryType,
  ...props
}: PiCreateSelectProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiCreateSelectProps
 * @returns Atlaskit Select template
 */
function AtlasKitTemplate({
  helpText,
  label,
  isMandatory,
  ...props
}: PiCreateSelectProps) {
  const theme = useContext(PiThemeContext)
  console.log(props)
  return (
    <div className={PiCreateSelectClass(theme)}>
      <div className='pi-select-wrapper'>
        <div className='select-label'>
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
        <CreatableSelect
          classNamePrefix={props.classNamePrefix || 'react-select'}
          noOptionsMessage={() => {
            return props.noOptionsMessage
              ? props.noOptionsMessage
              : `No ${label} Found`
          }}
          // className='select-input'
          {...(props as any)}
        />
        {helpText && <span className='form-error-msg'>{helpText}</span>}
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiCreateSelectProps
 * @returns Default Select template
 */
function DefaultTemplate(props: PiCreateSelectProps) {
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>{props.label}</label>
        <select>
          {props.options
            ? props.options.map((option: DropDownItemProps) => {
                return <option value={option.value}>{option.label}</option>
              })
            : null}
        </select>

        {props.helpText && <span>{props.helpText}</span>}
      </div>
    </Fragment>
  )
}
