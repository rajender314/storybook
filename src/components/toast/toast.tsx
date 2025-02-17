import { BaseProps } from '../../piConstant'
import { generateAddressTemplate } from './toast.generator'

export class PiToastProps extends BaseProps {
  headerLabel: string
  message: any
  onClose: () => void
  className?: string
}

/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiToast(props: PiToastProps) {
  const newprops = new PiToastProps()
  return generateAddressTemplate({ ...newprops, ...props })
}
