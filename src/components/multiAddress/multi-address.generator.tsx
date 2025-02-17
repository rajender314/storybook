import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiAddressProps } from './multi-address'
import PiThemeContext from '../../themeContext'
import { PiMultiAddressClass } from './multi-address.css'

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
  console.log(props)
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiMultiAddressClass(theme)}>
      <div className='quote-block'>
        {Object.keys(props.data).map((option: string, index: number) => {
          return (
            <div key={index}>
              {index === 0 && Object.keys(props.data[option]).length !== 0 && (
                <h2 className='label-text'>{props.billingLabel}</h2>
              )}
              {index === 1 && Object.keys(props.data[option]).length !== 0 && (
                <h2 className='label-text'>{props.shippingLabel}</h2>
              )}
              <div className='address-data'>
                {props.data && props.data[option].address1 && (
                  <div>{props.data[option].address1},</div>
                )}
                {props.data && props.data[option].address2 && (
                  <div>{props.data[option].address2},</div>
                )}
                {props.data && props.data[option].street && (
                  <div>{props.data[option].street},</div>
                )}
                {props.data && props.data[option].city && (
                  <div>{props.data[option].city},</div>
                )}
                {props.data && props.data[option].state && (
                  <div>{props.data[option].state},</div>
                )}
                {props.data && props.data[option].country && (
                  <div>{props.data[option].country},</div>
                )}
                {props.data && props.data[option].zip && (
                  <div>{props.data[option].zip}</div>
                )}
              </div>
            </div>
          )
        })}
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
  return <div></div>
}
