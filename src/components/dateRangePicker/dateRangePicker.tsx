import { BaseProps } from '../../piConstant'
import { generateDateRangeTemplate } from './dateRangePicker.generator'

export type DropdownElements = {
  id?: number
  name: any
}
export class PiDateRangePickerProps extends BaseProps {
  //  label: string
  //  appearance?: 'default' | 'tall' = 'default'
  //  items: DropdownElements[] = []
  //  onOpenChange: (e: any) => void
  //  className?: string

  selectsRange: boolean
  startDate: any
  endDate: any
  placeholderText: string
  className?: string
  minDate: any
  isClearable?: boolean
  onChange: (e: any) => void
}

/**
 *
 * @param props this component takes PiDropdownMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiDateRangePicker(props: PiDateRangePickerProps) {
  const newprops = new PiDateRangePickerProps()
  return generateDateRangeTemplate({ ...newprops, ...props })
}
