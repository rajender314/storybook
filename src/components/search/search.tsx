import { BaseProps } from '../../piConstant'
import { generateSearchTemplate } from './search.generator'

export class PiSearchProps extends BaseProps {
  onKeyUp?: (e: KeyboardEvent) => void
  onValueChange: (e: any) => void
  value: string = ''
  appearance?: 'standard' | 'none' | 'subtle' = 'standard'
  isCompact?: boolean
  isDisabled?: boolean
  width?: string | number
  placeholder?: string
  type?: string = 'text'
  onClear?: () => void
  maxLength?: number
  className?: string
}

/**
 *
 * @param props this component takes PiSearchProps as input
 * @returns  returns search component based on library type
 */
export default function PiSearch(props: PiSearchProps) {
  const newprops = new PiSearchProps()
  return generateSearchTemplate({ ...newprops, ...props })
}
