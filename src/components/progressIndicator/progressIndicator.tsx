import { BaseProps } from '../../piConstant'
import { generateProgressIndicatorTemplate } from './progressIndicator.generator'

export class PiProgressIndicatorProps extends BaseProps {
  appearance: 'default' | 'help' | 'inverted' | 'primary' 
  size?: 'small' | 'default' | 'large'
  spacing?: 'comfortable' | 'cozy' | 'compact'
  values: Array<string> = ['first', 'second', 'third']
  selectedIndex:number=0
}

/**
 *
 * @param props this component takes PiProgressIndicatorProps as input
 * @returns  returns component based on library type
 */
export default function PiProgressIndicator(props: PiProgressIndicatorProps) {
  const newprops = new PiProgressIndicatorProps()
  return generateProgressIndicatorTemplate({ ...newprops, ...props })
}
