import { BaseProps } from '../../piConstant'
import { generateDateTimePickerTemplate } from './dateTimePicker.generator'

export class PiDateTimePickerProps extends BaseProps {
  label?: string
  name: string = 'dateTimeField'
  onKeyDown?: (e: KeyboardEvent) => void
  helpText?: string
  appearance?: 'standard' | 'none' | 'subtle' = 'standard'
  isDisabled?: boolean
  placeholder?: string
  dateFormat?: string = 'MM/DD/YYYY'
  timeFormat?: string = 'HH:MM A'
  value?: string
  onChange?: (e: React.ChangeEvent) => void
  minDate?: string
  maxDate?: string
  isOpen?: boolean
  timeIsEditable?: boolean
  times?: any
  parseValue?: any
  isIcons?: boolean
  emitSave?: any
  emitUndo?: any
  isMandatory?: boolean
  datePickerProps?: any
  timePickerProps?: any
  id?: string
  testId?: string
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiDateTimePicker(props: PiDateTimePickerProps) {
  const newprops = new PiDateTimePickerProps()
  return generateDateTimePickerTemplate({ ...newprops, ...props })
}
