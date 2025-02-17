import { BaseProps } from '../../piConstant'
import { generateAddressTemplate } from './confirm-model.generator'

export class PiConfirmModelProps extends BaseProps {
  headerLabel: string
  message: any
  primaryBtnLabel?: string
  secondaryBtnLabel?: string
  onClose: () => void
  onAccept?: (e: any) => void
  onDecline?: (e: any) => void
  className?: any
  primaryBtnDisable?: boolean
  secondaryBtnDisable?: boolean
}

/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiConfirmModel(props: PiConfirmModelProps) {
  const newprops = new PiConfirmModelProps()
  return generateAddressTemplate({ ...newprops, ...props })
}
