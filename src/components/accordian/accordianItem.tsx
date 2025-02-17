import React from 'react'
import { AccordionItem } from 'react-accessible-accordion'

export type PiAccordianProps = {
  className?:string
  uuid? : string|number
}
/**
 *
 * @param props this component takes PiAccordionProps as input
 * @returns  returns component based on library type
 */
export default function PiAccordianItem({children,...props}: React.PropsWithChildren<PiAccordianProps>) {
  return <AccordionItem {...props}>{children}</AccordionItem>
}

