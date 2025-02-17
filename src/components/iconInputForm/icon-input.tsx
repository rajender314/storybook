// import { FormEventHandler } from 'react'

import { BaseProps } from '../../piConstant'
import { generateInputTemplate } from './icon-input.generator'

export class PiIconInputProps extends BaseProps {
  label?: string
  name: string = 'inputField'
  // onKeyDown?: (e: KeyboardEvent) => void
  onChange?: (e: any) => void
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
  onKeyPress?: any
  isMandatory?: boolean
}

/**
 *
 * @param props this component takes PiIconInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiIconInput(props: PiIconInputProps) {
  const newprops = new PiIconInputProps()
  return generateInputTemplate({ ...newprops, ...props })
}
