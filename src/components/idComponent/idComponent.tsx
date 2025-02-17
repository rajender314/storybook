import { BaseProps } from '../../piConstant'
import { generateIdComponentTemplate } from './idComponent.generator'

export class PiIdProps extends BaseProps {
  label?: string
}

/**
 *
 * @param props this component takes PiIdProps as input
 * @returns  returns component based on library type
 */
export default function PiIdComponent(props: PiIdProps) {
  const newprops = new PiIdProps()
  return generateIdComponentTemplate({ ...newprops, ...props })
}
