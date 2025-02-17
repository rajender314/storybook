import { BaseProps } from '../../piConstant'
import { generatePaginationTemplate } from './pagination.generator'

export type DropDownItemProps = {
  label: string
  value: string
}

export class PiPaginationProps extends BaseProps {
  selectedIndex?: number
  pages: number
  onChange?: (e: number) => void
  testId?: string = 'paging'
}

/**
 *
 * @param props this component takes PiPaginationProps as input
 * @returns  returns component based on library type
 */
export default function PiPagination(props: PiPaginationProps) {
  const newprops = new PiPaginationProps()
  return generatePaginationTemplate({ ...newprops, ...props })
}
