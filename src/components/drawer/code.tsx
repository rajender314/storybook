import React from 'react'
// import { Code } from '@atlaskit/drawer';

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
  return <code {...props}>{children}</code>
}

