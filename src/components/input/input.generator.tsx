import React, { Fragment, useContext } from 'react'
import { default as AtlasTextfield, TextFieldProps } from '@atlaskit/textfield'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiInputProps } from './input'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiInputClass } from './input.css'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

/**
 *
 * @param props as  PiInputProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateInputTemplate({ libraryType, ...props }: PiInputProps) {
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
function AtlasKitTemplate({
  label,
  helpText,
  isMandatory,
  ...props
}: PiInputProps) {
  const theme = useContext(PiThemeContext)
  console.log(isMandatory)

  return (
    <div className={PiInputClass(theme)}>
      {/* {label && <PiTypography component='label'>{label}</PiTypography>} */}
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
      <Fragment>
        <AtlasTextfield
          {...(props as TextFieldProps)}
          onClick={(e: any) => {
            if (props.type === 'string') {
              const input: any = e.target
              const end: any = e.target.value.length
              input.setSelectionRange(end, end)
              input.focus()
            }
          }}
        />
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
function DefaultTemplate(props: PiInputProps) {
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
 * @param props as  PiInputProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiInputProps) {
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
