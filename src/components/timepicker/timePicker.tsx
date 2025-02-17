import { BaseProps } from '../../piConstant'
import { generateTimePickerTemplate } from './timePicker.generator'

export class PiTimePickerProps extends BaseProps {
  label?: string
  name: string = 'TimeField'
  onKeyDown?: (e: KeyboardEvent) => void
  helpText?: string
  appearance?: 'standard' | 'none' | 'subtle' = 'standard'
  isDisabled?: boolean
  placeholder?: string
  timeFormat?: string = 'HH:MM A'
  value?: string
  onChange?: (e: string) => void
  isOpen?:boolean
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns component based on library type
 */
export default function PiTimePicker(props: PiTimePickerProps) {
  const newprops = new PiTimePickerProps()
  return generateTimePickerTemplate({ ...newprops, ...props })
}
