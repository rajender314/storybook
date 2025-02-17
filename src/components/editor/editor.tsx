import { BaseProps } from '../../piConstant'
import { generateEditorTemplate } from './editor.generator'

export class PiEditorProps extends BaseProps {
  value: any
  onChange: (e: any) => void
  className?: string
  onKeyPress?: React.EventHandler<any>
  onKeyDown?: React.EventHandler<any>
  onKeyUp?: React.EventHandler<any>
  readOnly?: boolean
}

/**
 *
 * @param props this component takes PiEditorProps as input
 * @returns  returns component based on library type
 */
export default function PiEditor(props: PiEditorProps) {
  const newprops = new PiEditorProps()
  return generateEditorTemplate({ ...newprops, ...props })
}
