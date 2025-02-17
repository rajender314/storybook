import React, { Fragment, useContext, useState } from 'react'
import Textfield from '@atlaskit/textfield'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiIconInputProps } from './icon-input'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiIconInputClass } from './icon-input.css'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

/**
 *
 * @param props as  PiIconInputProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateInputTemplate({
  libraryType,
  ...props
}: PiIconInputProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiIconInputProps
 * @returns Atlaskit TextField template
 */
function AtlasKitTemplate({
  label,
  helpText,
  isMandatory,
  ...props
}: PiIconInputProps) {
  const theme = useContext(PiThemeContext)
  const [value, setValue] = useState('')
  console.log(theme)
  return (
    <div className={PiIconInputClass(theme)}>
      {/* {label && <PiTypography component='label'>{label}</PiTypography>} */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='select-label'>
          {/* {label && <PiTypography component='label'>{label}</PiTypography>} */}
          {label && (
            <div className='field-label-div'>
              <PiTypography component='label'>{label}</PiTypography>
              {isMandatory && <span className='mandatory-star'>*</span>}
            </div>
          )}
          {props.isIcons && (
            <div>
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
          <Textfield
            {...(props as PiIconInputProps)}
            value={value}
            onChange={(e: any) => {
              console.log(e.target.value)
              setValue(e.target.value)
              props.onChange ? props.onChange(e.target.value) : null
            }}
            // onClick={(e: any) => {
            //  if (props.type === 'string') {
            //    const input: any = e.target
            //    const end: any = e.target.value.length
            //    input.setSelectionRange(end, end)
            //    input.focus()
            //  }
            // }}
          />
          {helpText && <PiTypography>{helpText}</PiTypography>}
        </Fragment>
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiIconInputProps
 * @returns Default TextField template
 */
function DefaultTemplate(props: PiIconInputProps) {
  const defaultProps = generateDefaultProps(props)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>{defaultProps.label}</label>
      <input {...defaultProps} />
      <span className='form-error-msg'>{defaultProps.helperText}</span>
    </div>
  )
}

/**
 *
 * @param props as  PiIconInputProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiIconInputProps) {
  const defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  }

  return defaultProps
}
