import { BaseProps } from '../../piConstant'
import { generateAddressTemplate } from './icondropdownmenu.generator'

export type DropdownElements = {
  id?: string
  element: React.ReactNode
}
export class PiIconDropdownMenuProps extends BaseProps {
  className?: string
  appearance?: 'default' | 'tall' = 'default'
  items: DropdownElements[] = []
  onOpenChange: (e: DropdownElements) => void
}

/**
 *
 * @param props this component takes PiIconDropdownMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiIconDropdownMenu(props: PiIconDropdownMenuProps) {
  const newprops = new PiIconDropdownMenuProps()
  return generateAddressTemplate({ ...newprops, ...props })
}
