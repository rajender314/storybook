import React, { Fragment, useContext } from 'react'
import { default as AtlasTextArea } from '@atlaskit/textarea'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiTextAreaProps } from './textArea'
import PiTypography from '../typography'
import PiThemeContext from '../../themeContext'
import { PiTextAreaClass } from './textArea.css'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

/**
 *
 * @param props as  PiTextAreaProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateTextAreaTemplate({
  libraryType,
  ...props
}: PiTextAreaProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return normalTextArea(props)
  }
}

/**
 *
 * @param props as  PiTextAreaProps
 * @returns Atlaskit Textarea template
 */
function AtlasKitTemplate({
  label,
  helpText,
  isMandatory,
  ...props
}: PiTextAreaProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiTextAreaClass(theme)}>
      <Fragment>
        <div className='select-label'>
          {/* {label && <PiTypography component='label'>{label}</PiTypography>} */}
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
        <AtlasTextArea {...props} />
        {helpText && <span className='form-error-msg'>{helpText}</span>}
      </Fragment>
    </div>
  )
}

/**
 *
 * @param props as  PiTextAreaProps
 * @returns Default Textarea template
 */
function normalTextArea(props: PiTextAreaProps) {
  const defaultProps = generateDefaultProps(props)
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>{props.label}</label>
        <textarea {...defaultProps} />
        {props.helpText && <span>{props.helpText}</span>}
      </div>
    </Fragment>
  )
}

/**
 *
 * @param props as  PiTextAreaProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiTextAreaProps) {
  const defaultProps = {
    disabled: props.isDisabled,
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder,
    value: props.value,
    defaultValue: props.defaultValue,
    rows: 3
  }
  if (props.maxHeight) {
    defaultProps.rows = parseInt(props.maxHeight)
  }

  return defaultProps
}
