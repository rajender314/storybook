import React, { Fragment, useContext, useEffect, useState } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
// import { PiToastProps } from './toast'
import PiThemeContext from '../../themeContext'
import { PiConfirmClass } from './confirm-model.css'
import PiButton from '../button'
import { PiNewCloseIcon } from '../icon/new_close.icon'
import { PiConfirmModelProps } from './confirm-model'
/**
 *
 * @param props as  PiConfirmClass
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAddressTemplate({
  libraryType,
  ...props
}: PiConfirmModelProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiConfirmClass
 * @returns Address template
 */
function AtlasKitTemplate({ ...props }: PiConfirmModelProps) {
  console.log(props)
  const theme = useContext(PiThemeContext)
  const [btnDisabled, setBtnDisabled] = useState<any>(false)
  const [declineBtnDisabled, setDeclineBtnDisabled] = useState<any>(false)
  useEffect(() => {
    console.log(props)
    setBtnDisabled(props.primaryBtnDisable || false)
    setDeclineBtnDisabled(props.secondaryBtnDisable || false)
  }, [props.className, props.primaryBtnDisable, props.secondaryBtnDisable])
  return (
    <Fragment>
      <div
        className={`${PiConfirmClass(theme)} pi-toast confirmation-container ${
          props.className
        }`}
      >
        <div className='close-icon-container' onClick={props.onClose}>
          <PiNewCloseIcon />
        </div>

        <div className='text-container'>
          <div className='text-container-header'>{props.headerLabel}</div>
          <div className='text-container-text'>{props.message}</div>
        </div>

        <div className='toast-action'>
          {props.primaryBtnLabel && (
            <PiButton
              appearance='primary'
              label={props.primaryBtnLabel}
              libraryType='atalskit'
              onClick={() => {
                props.onAccept ? props.onAccept('accept') : ''
              }}
              isDisabled={btnDisabled}
            />
          )}
          {props.secondaryBtnLabel && (
            <PiButton
              appearance='secondary'
              label={props.secondaryBtnLabel}
              libraryType='atalskit'
              onClick={() => {
                props.onDecline ? props.onDecline('decline') : ''
              }}
              isDisabled={declineBtnDisabled}
            />
          )}
        </div>
      </div>
      {(props.className === 'show' || props.className === 'show text-red') && (
        <div className='toast-backdrop' />
      )}
    </Fragment>
  )
}

/**
 *
 * @param props as  PiConfirmClass
 * @returns Default Spinner template
 */
function defaultTemplate() {
  return <div />
}
