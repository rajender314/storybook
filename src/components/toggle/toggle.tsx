import { BaseProps } from '../../piConstant'
import { generateToggleTemplate } from './toggle.generator'

export type DropDownItemProps = {
  label: string
  value: string
}

export class PiToggleProps extends BaseProps {
  size?: 'large' | 'regular' = 'regular'
  name:string
  isDisabled?: boolean
  isChecked?:boolean
  label?:string
  helpText?:string
  direction?: 'column' | 'row' = 'row'
  onChange?: (e:any) => void
  value?:string
}

/**
 *
 * @param props this component takes PiToggleProps as input
 * @returns  returns component based on library type
 */
export default function PiToggle(props: PiToggleProps) {
  const newprops = new PiToggleProps()
  return generateToggleTemplate({ ...newprops, ...props })
}
