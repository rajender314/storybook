// import { FormEventHandler } from 'react'

import { BaseProps } from '../../piConstant'
import { generateInputTemplate } from './input.generator'

export class PiInputProps extends BaseProps {
  label?: string
  name: string = 'inputField'
  onKeyDown?: (e: KeyboardEvent) => void
  onKeyPress?: (e: KeyboardEvent) => void
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  helpText?: string
  appearance?: 'standard' | 'none' | 'subtle' = 'standard'
  isCompact?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  width?: string | number
  placeholder?: string
  type?: string = 'text'
  className?: string
  value?: string
  maxLength?: number
  autofocus?: boolean
  ref?: any
  elemBeforeInput?: any
  isIcons?: boolean
  emitSave?: any
  emitUndo?: any
  isMandatory?: boolean
  onClick?: any
  convertToCapital?: boolean
  allowedDecimalsPoints?: number
}

/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiInput(props: PiInputProps) {
  const newprops = new PiInputProps()
  return generateInputTemplate({ ...newprops, ...props })
}
