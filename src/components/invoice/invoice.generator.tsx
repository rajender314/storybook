import React, { Fragment } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiInvoiceProps } from './invoice'
import { PiInvoiceClass } from './invoice.css'

/**
 *
 * @param props as  PiInvoiceProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateInvoiceTemplate({
  libraryType,
  ...props
}: PiInvoiceProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiInvoiceProps
 * @returns Atlaskit Profile Section template
 */
function AtlasKitTemplate({ ...props }: PiInvoiceProps) {

  return (
    <div className={PiInvoiceClass()}>
      {Object.keys(props.invoiceOptions).map((option: string, index: number) => {
        return (
          <div key={index}>
              <div className='main'>
            <div className='primary'>{option}</div>
            <div className='secondary'>{props.invoiceOptions[option]}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 *
 * @param props as  PiProfileSectionProps
 * @returns Default Profile Section  template
 */
function DefaultTemplate() {
  return (
    <Fragment>
      <div></div>
    </Fragment>
  )
}
