import { BaseProps } from '../../piConstant'
import { generateBackTemplate } from './backSection.generator'

export type BackProps = {
  name: string
  route: string
  className?: string
}

export class PiBackSectionProps extends BaseProps {
  backOptions: BackProps
}

/**
 *
 * @param props this component takes PiBackSectionProps as input
 * @returns  returns component based on library type
 */
export default function PiBackSection(props: PiBackSectionProps) {
  const newprops = new PiBackSectionProps()
  return generateBackTemplate({ ...newprops, ...props })
}
