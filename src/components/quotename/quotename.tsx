import { BaseProps } from '../../piConstant'
import { generateQuoteNameTemplate } from './quotename.generator'


export class PiQuoteNameProps extends BaseProps {
  label?: string
  description?: string = ''
  src?: string = ''
}

/**
 *
 * @param props this component takes PiQuoteNameProps as input
 * @returns  returns component based on library type
 */
export default function PiQuoteName(props: PiQuoteNameProps) {
  const newprops = new PiQuoteNameProps()
  return generateQuoteNameTemplate({ ...newprops, ...props })
}
