import React, { Fragment, useContext, useEffect, useState } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
// import { PiToastProps } from './toast'
import PiThemeContext from '../../themeContext'
import { PiToastClass } from './toast.css'
import { PiNewCloseIcon } from '../icon/new_close.icon'
import { PiToastProps } from './toast'
import { PiCheck } from '../icon/check.icon'
/**
 *
 * @param props as  PiToastClass
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAddressTemplate({
  libraryType,
  ...props
}: PiToastProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiToastClass
 * @returns Address template
 */
function AtlasKitTemplate({ ...props }: PiToastProps) {
  console.log(props)
  const theme = useContext(PiThemeContext)
  let [showPopupClass, setShowPopupClass]: any = useState('')

  useEffect(() => {
    showPopupClass = props.className
    setShowPopupClass(props.className)
    if (props.className) {
      setTimeout(() => {
        //  setShowPopupClass(props.className)
        props.onClose()
      }, 2000)
    }
  }, [props.className])

  return (
    <Fragment>
      <div
        className={`${PiToastClass(
          theme
        )} pi-toast confirmation-container ${showPopupClass}`}
      >
        <div className='close-icon-container' onClick={props.onClose}>
          <PiNewCloseIcon />
        </div>
        <div className='success-content'>
          <div className='tick-icon'>
            <PiCheck />
          </div>
          <div className='text-container'>
            <div className='text-container-header'>{props.headerLabel}</div>
            <div className='text-container-text'>{props.message}</div>
          </div>
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
 * @param props as  PiToastClass
 * @returns Default Spinner template
 */
function defaultTemplate() {
  return <div />
}
