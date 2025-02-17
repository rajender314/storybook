import { BaseProps } from '../../piConstant'
import { generateLabelNameTemplate } from './labelname.generator'

export class PiLabelNameProps extends BaseProps {
  label?: string
  description?: any = ''
  className?: string
  isEditIcon?: boolean
  emitSave?: any
  isMandatory?: boolean
  isCopyIcon?:boolean
  onCopyClick?: (e: any) => void
}

/**
 *
 * @param props this component takes PiLabelNameProps as input
 * @returns  returns component based on library type
 */
export default function PiLabelName(props: PiLabelNameProps) {
  const newprops = new PiLabelNameProps()
  return generateLabelNameTemplate({ ...newprops, ...props })
}
