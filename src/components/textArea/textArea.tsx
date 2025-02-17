import { BaseProps } from '../../piConstant'
import { generateTextAreaTemplate } from './textArea.generator'
export type resizeTypes = 'auto' | 'vertical' | 'horizontal' | 'none'
export class PiTextAreaProps extends BaseProps {
  label?: string
  name: string = 'textAreaField'
  helpText?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  placeholder?: string
  appearance?: 'standard' | 'none' | 'subtle' = 'standard'
  isCompact?: boolean
  minimumRows?: number = 3
  value?: string
  defaultValue?: string
  maxHeight?: string
  onChange?: (e: any) => void
  maxLength?: number
  isIcons?: boolean
  emitSave?: any
  emitUndo?: any
  isMandatory?: any
  convertToCapital?:boolean
}

/**
 *
 * @param props this component takes PiTextAreaProps as input
 * @returns  returns component based on library type
 */
export default function PiTextArea(props: PiTextAreaProps): any {
  const newprops = new PiTextAreaProps()
  return generateTextAreaTemplate({ ...newprops, ...props })
}
