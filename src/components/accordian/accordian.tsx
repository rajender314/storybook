import React from 'react'
import { PiAccordianClass } from './accordian.css'
import { Accordion } from 'react-accessible-accordion'

export type PiAccordionProps = {
  allowMultipleExpanded?:boolean
  allowZeroExpanded?: boolean
  className?:string
  onChange?:(e: any) => void
}

/**
 *
 * @param props this component takes PiAccordionProps as input
 * @returns  returns component based on library type
 */
export default function PiAccordian({
  children,
  ...props
}: React.PropsWithChildren<PiAccordionProps>) {
  return (
    <div className={PiAccordianClass}>
      <Accordion {...props}>{children}</Accordion>
    </div>
  )
}
