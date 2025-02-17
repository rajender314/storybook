import React from 'react'
import { AccordionItemHeading,AccordionItemButton } from 'react-accessible-accordion'

export type PiAccordianProps = {
  className?:string
}
/**
 *
 * @param props this component takes PiAccordionProps as input
 * @returns  returns component based on library type
 */
export default function PiAccordianHeader({
  children,
  ...props
}: React.PropsWithChildren<PiAccordianProps>) {
  return <AccordionItemHeading>
  <AccordionItemButton {...props}>{children}</AccordionItemButton>
  </AccordionItemHeading>
}

