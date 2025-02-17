import { BaseProps } from '../../piConstant'
import { generateCheckboxTemplate } from './checkbox.generator'

export class PiCheckboxProps extends BaseProps {
  label?: string
  name: string = 'radioField'
  helpText?: string
  isDisabled?: boolean
  isChecked?: boolean
  onChange?: (e: React.ChangeEvent) => void
  value?: string
  size?: 'small' | 'medium' | 'large' = 'small'
  className?: string
}

/**
 *
 * @param props this component takes PiCheckboxProps as input
 * @returns  returns input component based on library type
 */
export default function PiCheckbox(props: PiCheckboxProps) {
  const newprops = new PiCheckboxProps()
  return generateCheckboxTemplate({ ...newprops, ...props })
}
