import { BaseProps } from '../../piConstant'
import { generateAddressTemplate } from './dropdownmenu.generator'

export type DropdownElements = {
  id?: number
  name: any
  display?: boolean
  isSelected?: boolean
}
export class PiDropdownMenuProps extends BaseProps {
  label: string
  appearance?: 'default' | 'tall' = 'default'
  items: DropdownElements[] = []
  onOpenChange: (e: any) => void
  className?: string
  autoFocus?: any
}

/**
 *
 * @param props this component takes PiDropdownMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiDropdownMenu(props: PiDropdownMenuProps) {
  const newprops = new PiDropdownMenuProps()
  return generateAddressTemplate({ ...newprops, ...props })
}
