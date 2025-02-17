import React from 'react'
import { AccordionItemPanel } from 'react-accessible-accordion'

export type PiaccordianProps = {
  className?:string
  region?: boolean
}
/**
 *
 * @param props this component takes PiAccordionProps as input
 * @returns  returns component based on library type
 */
export default function PiAccordianPanel({children,...props}: React.PropsWithChildren<PiaccordianProps>) {
  return <AccordionItemPanel {...props}>{children}</AccordionItemPanel>
}

