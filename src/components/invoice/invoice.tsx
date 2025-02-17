import { BaseProps } from '../../piConstant'
import { generateInvoiceTemplate } from './invoice.generator'

export type InvoiceProps = {
  packingCharges: string
  SGST: string
  CGST: string
  IGST: string
  Total: string
}

export class PiInvoiceProps extends BaseProps {
invoiceOptions: InvoiceProps
}

/**
 *
 * @param props this component takes PiInvoiceProps as input
 * @returns  returns component based on library type
 */
export default function PiBackSection(props: PiInvoiceProps) {
  const newprops = new PiInvoiceProps()
  return generateInvoiceTemplate({ ...newprops, ...props })
}
