import { BaseProps } from '../../piConstant'
import { generateProfileHeaderTemplate } from './profileheader.generator'


export class PiProfileHeaderProps extends BaseProps {
  text?: string
}

/**
 *
 * @param props this component takes PiProfileHeaderProps as input
 * @returns  returns component based on library type
 */
export default function PiProfileHeader(props: PiProfileHeaderProps) {
  const newprops = new PiProfileHeaderProps()
  return generateProfileHeaderTemplate({ ...newprops, ...props })
}
