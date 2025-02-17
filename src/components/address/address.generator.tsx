import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiAddressProps } from './address'
import PiThemeContext from '../../themeContext'
import { PiAddressClass } from './address.css'

/**
 *
 * @param props as  PiAddressProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAddressTemplate({
  libraryType,
  ...props
}: PiAddressProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiAddressProps
 * @returns Address template
 */
function AtlasKitTemplate({ ...props }: PiAddressProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={`${PiAddressClass(theme)} pi-address`}>
      <div className='quote-block'>
        <h2 className='label-text'>{props.label}</h2>
        <div>
          <div className='address-data'>
            {props.data && props.data.address1 && (
              <div>{props.data.address1},&nbsp;</div>
            )}
            {props.data && props.data.address2 && (
              <div>{props.data.address2},&nbsp;</div>
            )}
            {props.data && props.data.street && (
              <div>{props.data.street},&nbsp;</div>
            )}
            {props.data && props.data.city && (
              <div>{props.data.city},&nbsp;</div>
            )}
            {props.data && props.data.state && (
              <div>{props.data.state},&nbsp;</div>
            )}
            {props.data && props.data.country && (
              <div>{props.data.country}, &nbsp;</div>
            )}
            {props.data && props.data.zip && <div>{props.data.zip}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiAddressProps
 * @returns Default Spinner template
 */
function defaultTemplate() {
  return <div />
}
